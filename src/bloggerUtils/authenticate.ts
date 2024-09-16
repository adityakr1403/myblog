import {Credentials, OAuth2Client} from "google-auth-library";
import {google} from "googleapis";
import {kv} from "@vercel/kv";

const SCOPES = ['https://www.googleapis.com/auth/blogger'];

const authenticate = async (): Promise<OAuth2Client> => {
    const oAuth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
    );

    // check if there is a token in kv storage
    const token = await kv.get('token') as Credentials;
    if (token) {
        oAuth2Client.setCredentials(token);
        // check if the token is expired
        if (token.expiry_date && token.expiry_date < Date.now()) {
            console.log('Token expired, refreshing token');
            oAuth2Client.getAccessToken().then((res) => {
                kv.set('token', res.token);
            });
        }
    } else {
        // Get new token
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES,
        });
        console.log('Authorize this app by visiting this url:', authUrl);
        // After getting the code from the URL, exchange it for tokens
        const {tokens} = await oAuth2Client.getToken(process.env.GOOGLE_ACCESS_CODE ?? '');
        oAuth2Client.setCredentials(tokens);
        // Store the token to disk for later program executions
        await kv.set('token', tokens);
    }
    return oAuth2Client;
};

export {authenticate};
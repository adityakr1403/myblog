import {Credentials, OAuth2Client} from "google-auth-library";
import {google} from "googleapis";
import {kv} from "@vercel/kv";

const SCOPES = ['https://www.googleapis.com/auth/blogger'];

const authenticate = async (): Promise<OAuth2Client> => {
    // const credentialsPath = path.join(process.cwd(), 'credentials.json');
    // const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

    // const {client_secret, client_id, redirect_uris} = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
    );

    // Check if we have previously stored a token.
    // const tokenPath = path.join(process.cwd(), 'token.json');
    const token = await kv.get("token") as Credentials;
    if (token) {
        // const token = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
        oAuth2Client.setCredentials(token);
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
        // fs.writeFileSync(tokenPath, JSON.stringify(tokens));
        await kv.set("token", tokens);
    }

    return oAuth2Client;
};

export {authenticate};
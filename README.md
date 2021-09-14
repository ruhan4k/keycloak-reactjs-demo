# Keycloak React.JS Demo

Demo for React.JS and Fourkites OAuth2.0 Self-Service integration. It is based on [this repo](https://github.com/dasniko/keycloak-reactjs-demo).

## How to run

```
yarn install
yarn start
```

It will run a server on `http://localhost:3000`.

Now you can just call our URL passing this server as `redirectUrl`:

```
https://app-dev.fourkites.com/self-service/external-onboarding?
	token=<M2M_TOKEN>&
	carrierName=MyCarrier&
	carrierAddress=TheAddress&
	userEmail=test@test.com&
	redirectUrl=http://localhost:3000/
```

And in the end of the process the user will be redirected to the server you are running locally.

You will see the token and refreshToken printed on the JavaScript console after it is redirected and this application will also show you a list of books in the end.

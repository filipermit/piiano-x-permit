<h2>Launch the Application 🚀</h2>

<img width="1624" alt="Screenshot 2022-11-18 at 17 28 48" src="https://user-images.githubusercontent.com/109458126/202753867-04fd9103-0962-49ee-928b-1aae2a9ffa0a.png">

Please follow the below steps to run this demo.

---

<h3>1. Complete the onboarding with Permit.io</h3>
Configure the envrionment varaibles:

```
# PERMIT
PERMIT_IO_KEY=KKKKKKKKK
PERMIT_IO_URL=http://localhost:7766

# PVAULT
PVAULT_SERVICE_LICENSE=LLLLLLLLL
PVAULT_API_KEY=pvaultauth
PVAULT_BASE_PATH=http://localhost:8123

# PSQL
DATABASE_URL=localhost
```

<h3>2. Complete the onboarding with Permit.io</h3>

Navigate to the [Permit App](https://app.permit.io/) and create an account. Run through the onboarding to learn how to work with Permit.

Make sure you create a policy like shown in the example below. Your policy needs an `Admin`, a `Friend` and a `Stranger` role, with a `card` resource.
<br /><br />
The resource should have the actions: `view-personal-info`, `view-public-info`, `view-public-ssn` & `view-private-ssn`.

<img width="1624" alt="Screenshot 2022-12-06 at 11 19 32" src="https://user-images.githubusercontent.com/109458126/205884826-ac4627ff-2ae4-4995-b99d-7069ffa2c6d3.png">

<img width="1624" alt="Screenshot 2022-12-06 at 11 19 42" src="https://user-images.githubusercontent.com/109458126/205884839-eaed6f0d-d67a-4796-81b1-423b47693657.png">

<img width="1624" alt="Screenshot 2022-12-06 at 11 19 50" src="https://user-images.githubusercontent.com/109458126/205884854-8bdf721d-2bdc-4ccb-a6eb-d95545432d02.png">

If you are struggling with this step, follow the [Quickstart instructions](https://docs.permit.io/quickstart).

<h3> 3. Run the Policy Decision Point (PDP)</h3>

Download the docker image for the PDP:

`docker pull permitio/pdp-v2:latest`

Now run the PDP with the command below in your terminal. Make sure to replace the API KEY with your own.

`docker run -p 7766:7000 --env PDP_API_KEY=<YOUR_PERMIT_API_KEY> permitio/pdp`

<h3> 4. Register for a free 30-days Piiano Vault license </h3>

See the [getting started guide](https://piiano.com/docs/guides/get-started/).

<h3> 5. Initialize and populate the database and Vault</h3>

`./script/demo.sh`

<h3> 6. Start the app</h3>

`npm install` followed by `npm run dev`
<br /><br />
Once the app starts, navigate to `localhost:3000`

<h3>6. Enjoy the demo!</h3>

![Alt Text](https://media.giphy.com/media/CnhXn5Z9OUCYTzBAVr/giphy.gif)

---

<h3>Still here? Star Permit on Github or visit Piiano!</h3>

⭐ [Permit.io](https://github.com/permitio/opal) ⭐ [Piiano.com](https://piiano.com) ⭐
<br />

## cert

> OpenSSL certificates for `localhost` development.

The certificates in this directory can be used to allow a **secure** SSL connection when `https://localhost:${PORT}` is loaded from the **Chrome** web browser (only).



## Usage

1. Open the Windows **hosts** file from  
`C:\Windows\System32\drivers\etc` (hosts)

2. Add the following lines:  

		127.0.0.1 localhost.com
		127.0.0.1 localhost

3. Use the certificates here on express's `index.js` for SSL.

4. Load the localhost website:  
`https://localhost:8443`

5. Export and download the untrusted certificate (a `.cer` file).  

6. Register the exported self-signed certificate from **# 5** as a CA trusted Certificate Authority in the chrome/windows certificates store. See [[1]](https://trello.com/c/hnMyP9pp),  [[2]](https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node) for more reference.

7. Close all open Chrome browsers and reload  
`https://localhost:8443`

### Certificate Creation Notes

1. Install [OpenSSL](https://slproweb.com/products/Win32OpenSSL.html).

2. Update the windows **hosts** file as described from **Usage # 1**.

3. Create a `req.cnf` file with content:

		[req]
		distinguished_name = req_distinguished_name
		x509_extensions = v3_req
		prompt = no
		[req_distinguished_name]
		C = PH
		ST = Rizal
		L = Manila
		O = Celestial Being
		OU = Assault
		CN = localhost.com
		[v3_req]
		keyUsage = critical, digitalSignature, keyAgreement
		extendedKeyUsage = serverAuth
		subjectAltName = @alt_names
		[alt_names]
		DNS.1 = localhost.com
		DNS.2 = localhost

3. Run the command from cmd:  
`openssl req -nodes -newkey rsa:2048 -days 365 -x509 -keyout server.key -out serve.cert -config req.cnf -sha256`
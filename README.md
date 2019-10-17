## express-server

> Basic express server template with SSL using OpenSSL certificates.


### Dependencies

**NodeJS** must be installed



## Usage

1. Clone this repository  
`git clone https://github.com/ciatph/express-server.git`

2. Install dependences.  
`npm install`

3. Run the server.  
`npm run start`

4. Load the website.
   - HTTP version: [http://localhost:3000](http://localhost:3000)
   - HTTPS version: [https://localhost:8443](https://localhost:8443)

5. (Optional) Load from a valid, secure SSL connection. Only for Chrome browsers running on Windows OS.  

	- Open the Windows **hosts** file from  
`C:\Windows\System32\drivers\etc` (hosts). Add the following lines:  

			127.0.0.1 localhost.com
			127.0.0.1 localhost

	- Use the self-signed certificates here on express's `index.js` for SSL.

	- Load the localhost website:  
`https://localhost:8443`

	- Export and download the untrusted certificate. 

	- Register the exported self-signed certificate from previous step as a CA trusted Certificate Authority in the chrome/windows certificates store. See [[1]](https://trello.com/c/hnMyP9pp),  [[2]](https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node) for more reference.

	- Close all open Chrome browsers and reload  
`https://localhost:8443`


## References

[[1]](https://trello.com/c/hnMyP9pp) - openssl certs for express notes  
[[2]](https://gist.github.com/ciatph/9834a92dfc64c6077ed654ed20b6da77) - openssl create certificate gist
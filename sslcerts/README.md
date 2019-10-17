## sslcerts

> Basic SSL certificates created using OpenSSL

The certificates in this directory can be used to allow an **insecure** SSL connection when `https://localhost:${PORT}` is loaded from web browsers.



## Usage

1. Use the certificates here on express's `index.js` for  an insecure SSL.

2. Load the localhost website:  
`https://localhost:8443`- (insecure SSL)




### Certificate Creation Notes

1. Install [OpenSSL](https://slproweb.com/products/Win32OpenSSL.html).

2. Run the command from cmd:  
`openssl req -nodes -new -x509 -keyout server.key -out server.out`
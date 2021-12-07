###

### Generate keys `/api/generate`
```js
// Output
{
"privateKey",
"publicKey"
}
```
#### Example cURL

curl --location --request GET 'http://localhost:3000/api/generate' \
--data-raw ''

### Sign `/api/sign`
```js
// Input
{
"message": "hello_world",
"privateKey": "private_key"
}
// Output
{
"signature": "signature"
}
```
#### Example cURL

curl --location --request POST 'http://localhost:3000/api/sign' \
--header 'Content-Type: application/json' \
--data-raw '{
"message": "hello_world",
"privateKey": "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAy4kLoj/MRyvWPgTYDxbWo4CbTwFrIWPE5jZfDW5N0NMZ2qwL\nnIVPn3NDgoY/1uFW9YQae1gWwfffu45YoqFPj1+8lbYxmO6GGUz6LaN+hWCjhzsX\nymZ7mC50IXRqXPKXYkolDmgCp1Nz0XkeKQHYQ4ezwD3Tu1PlmD/GB7uRBsLfGRXT\n5ZqQvFzLiM1ti6Wd1DdVaTiIpQUKAtqH7xJbtrGQ6ez9jUWZowCM7ywzpk9BS0OA\nPeWUfBeMKxJchdSMWqIFMgyEX9Eh3CaDa4J1zbM/L8mhPOibEe2kunq8KtVZAL9n\nqOrXZHrnUBelt4WIj3LDmFxtynUYwnqo2u4vlwIDAQABAoIBABB2jFdaW7aiCBlK\nIQPPcBsXivhv/+9ad5G7ciLO+kJa4Ot8IRBPBCq8kwhavY0u+u6u+cliTazw1MsB\n749wBtRtBP8DFq3tFTG0tUO9xr0ZHQESOZFoirS7hS8zkGrmQHJ11tt8dEJ+kI6w\nAk2E1a5YqqRxG9A6MAcJmYYEmO137rfJO1ITGRXccbWytHVBWUXJm8vvCGp/MB25\ndiWkbchK43uHx37StF0960xHdRl96aWOIMNJwTFl2dBqx2st5pMRFvsFG04OKgB2\nXl59jR8osnPhKJXgtCgsR27+nYAcH1HFa37mtgg6AGTxP29tsELapzbAvzvoZQKE\n4vLAp0kCgYEA9VUNUI4zCI8zbxl417FfgPcGtoN8Uf5aLhm5lQNbZRQCAklwJvBH\ntUsymUYlPN9W2tdzXA5zyL07T2o4pjjr1sVp7VVhqNiQpX1ZJACsyloq2/2XiC+4\nZnBFVyQh6CJQDJ6HYJh55sXQcgYY5CsqXrGIw/6MJUUTfwLEmFChrkUCgYEA1GK5\nymnhXewV63ihghpRxiwCbLHs4C5wAkJk5y47/VA3tJCWMNfmOC6MfTBCP8xg5ioI\nVrpPPknkoUkzWfd2s7N3c3fT8GILN1RmwjssbBrsnR6bi/yPxntKuw3FzRenkMV5\nHQWdFS4wuvptCdux9e0IqTvWdyPlZUJAZp2J4isCgYBZFfdtxxU1CHsO3tsIx/n8\nJLelUv2z8H7iuqivObbYb3mDRxOYsCv540KOcfBXuGobsZzMUtssi7qbzeCgS48o\nQCuE6To7S9jKn0fdUPltyWxC0kVSSLHXUPF9ATvmxX739iEGrJenezGEFj63rA0I\nscMOGMLfTcQUnPaysKTlWQKBgE8mm+b7nqnKGkEvK8G43VDlheHMTWMe609sPv6J\nFIJLKvd4CwEY9QtrDaB6I7ZzDIm6kHEB7hZgo3wYM7MLrok6EQJPXgTwBQ4RvloU\ng3Gmdxf3GDELZumpeShM8bKFZkVl0sUmGmySUkbcnVZXMfNc6yVmz36HOi6KikWz\n4HcRAoGANrw3LdUE3uN1KP7K+5oRjgzGcv4Jd0uaiYoaFPC/Bl5lTkKdvWkYzxp9\nAOULtzE/v7aCYJ9I3y8w+mocXWJtmgS7x7nrGkae/suJjYG3UuR+BZQEBSo1OL9i\nPYDks7mT5GjfV+O844W5L6zT+aqs2dv4pICHC9WhR25trXqRc9M=\n-----END RSA PRIVATE KEY-----\n"
}'

### Verify
```js
// Input
{
"message",
"signature",
"publicKey"
}

// Output
boolean
```
#### Example cURL

curl --location --request POST 'http://localhost:3000/api/verify' \
--header 'Content-Type: application/json' \
--data-raw '{
"message": "hello_world",
"publicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEAy4kLoj/MRyvWPgTYDxbWo4CbTwFrIWPE5jZfDW5N0NMZ2qwLnIVP\nn3NDgoY/1uFW9YQae1gWwfffu45YoqFPj1+8lbYxmO6GGUz6LaN+hWCjhzsXymZ7\nmC50IXRqXPKXYkolDmgCp1Nz0XkeKQHYQ4ezwD3Tu1PlmD/GB7uRBsLfGRXT5ZqQ\nvFzLiM1ti6Wd1DdVaTiIpQUKAtqH7xJbtrGQ6ez9jUWZowCM7ywzpk9BS0OAPeWU\nfBeMKxJchdSMWqIFMgyEX9Eh3CaDa4J1zbM/L8mhPOibEe2kunq8KtVZAL9nqOrX\nZHrnUBelt4WIj3LDmFxtynUYwnqo2u4vlwIDAQAB\n-----END RSA PUBLIC KEY-----\n",
"signature": "tNjVjNkDeC3IGdtmenPzBLJcXR2wciurZdx/cNPbYsvhQcV3kbzUFYyRPCnhubqIzj0x4OkVE7ZPsS933IWwqVTEhc9hzV3reCNcpqGUKbpRFF+X1y0V2dY7z1H3SeVwYsV3KHLfeU3Qcdocy/ijMrPGj/VRZ9mmnCGVx5LNioLrG6WEoE5fGYddG71Z0kKLz7kFCUlOsR6VS1cja4yNZS1b2f2si2yzQaYnC+li/RjWbJjH+gg4CPNHor5rbzokMIjPV/VC/g9U9utQvaw8tp9PpfKzKCrpM4c/Q/DBAQQXHh0a/t+RhwbfPGg1OEqYJhJahoXVVFvgyOsREspwPQ=="
}'

### Parse ERC20 `/api/transaction/`
```js
// Input
{
hash
}

// Output
{
"transfers",
"blockHeight",
"contractAddress",
"hash"
}
```
#### Example cURL

curl --location --request GET 'http://localhost:3000/api/transaction' \
--header 'Content-Type: application/json' \
--data-raw '{
"hash":"0x6cdb1d1d2828afe634323331e73c65b9d67b2fd1b71c95b3ff4597ec588c09b2"
}'

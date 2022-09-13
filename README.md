# Udgram Frontend

![Pipeline](./pipeline.png)
## Required Environment Variables
| Environment Variable        | Description                                                                      |
|         :-:                 |     :-:                                                                          |
| WEB_SERVER_DNS              | Loadbalancer URL (from cloudformation outputs `WebServerDNS`)                    | 
| FRONTEND_BUCKET_NAME        | Frontend bucket name (from cloudformation outputs `FrontEndBucket`)              | 


## Pipeline status: [![mohammed0yassin](https://circleci.com/gh/mohammed0yassin/udgram-front.svg?style=svg)](https://app.circleci.com/pipelines/github/mohammed0yassin/udgram-front)
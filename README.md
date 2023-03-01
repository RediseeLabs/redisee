# RediSee - An Easy-To-Use Redis Visualizer for Developers

​
RediSee is a light-weight web application that visualize Redis instances’ core metrics in a user-friendly manner. Our open-source tool is available for free and allows developers to easily monitor essential metrics such as memory usage, keyspace cache/hit ratio, evicted keys, as well as latency and throughput data.
<br>
<br>
​

## How Install Redis on your computer

​
<br />
​
You'll will need a running Redis instance on your RAM in order to test RediSee
here the steps to follow on official Redis website :
​
<br />
​

```
     https://redis.io/docs/getting-started/
```

​
<br />
​
run a local Redis database by using the command redis-server on your terminal
​
<br />
​

```
    $ redis-server
```

​
<br />
​
this will start a redis instance with the default value of : port: 6379, host: 127.0.0.1
You are now ready to use RediSee on your newly running Redis instance.
​
<br />
<br />
​

## How to use Redisee ?

​
<br>

- Clone the repo to your local machine

```
 git clone https://github.com/RediseeLabs/redisee.git
```

<br/>

- Install all dependencies and run the webserver to run the app locally

```
npm install
npm run dev
```

​

- After the webpage has loaded, click on either the "+" or "connect" button and fill in the name of your Redis instance and fill port and host inputs (default value for local redis is port : 6379, host: 127.0.0.1). You will notice your Redis instance added on the sidebar as soon as the form has been submitted.

  <br />
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzg5OTFmMjVmOTJmYzFmNzYyZDM0YzE4ZmUxMDkxZmIwMjRjMDliNyZjdD1n/aFrVoPv9FLq8oVMGla/giphy.gif"  width="700" height="350">
  <br>
  <br>
​

- Click on any of the metrics buttons(Performance, Memory, etc) to monitor the health of your Redis instance.
  <br/>
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmNiY2JkNWQ5MTE0MTE3MmQyMzRlOTZhYmM3OTk5YzhlNWUxOWMxNyZjdD1n/NJv0uLAvfRUqy7twJ9/giphy.gif"  width="700" height="350">

<br>
<br>
​
- You can create multiple instances and monitor them individually.
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGQ4NWNlZDY2YTQwMWM5YTgyMDJmYmNhZWM2ODBjMDMyMjY0NzA2MSZjdD1n/l6M8B6BkOhIxI2qfvD/giphy.gif"  width="700" height="350">
​
<br>
<br>
​
- If you no longer need to monitor them, you can clear them all at once or individually.
​
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWQ4YjY1ODAzZDkxOWUxYWE5YzllZjkzNWM5OTE1ZGY2N2U1ZmE2MCZjdD1n/ejG2PPKbz0xfbPXfAn/giphy.gif"  width="700" height="350">
​
<br>
<br>
​
- Dark mode supported
​
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjFjNTlmZTIyYTI0ZDA0Y2U2ZTAyZmNjODA3Mzg5YTk1MzNiZWJiNiZjdD1n/ziJ2RgyLky2ibO4e65/giphy.gif"  width="700" height="350">

<br>
​
## RediSee v1.0 features
​
- Add, Delete, Clear redis Clients
- Display all Data fetched in easy to understand graphs
- Look at different category of data by using tabs
- Switch theme from dark to light
​
## Contributing
​
We welcome suggestions and pull requests!
Contact us on GitHub
​
<br />
​
### Feature we'd love to see implemented in the future :

<br />

- Abilities to records all metrics for a period of time and persist it in the database
- Interpret metrics recorded. For example, a user might want to check average latency between  March 18th  1pm and 6pm.
- Give the user the possibility to change the interval of data being recorded (now defaults to 1s)
- Refactor graphs and type of metrics fetched. Right now we're not using the most optimal graphs types for displaying data.
- Interact with Redis database by SET, PUT, DELETE keys through an interface.
- Being able to see data held by Redis database and Sort/filter it
- Redis can run in cluster mode which means Instances are connected together, get different roles (Master/Slave) and data is sharded. Opportunities for visualization
- Be able to clear datas
- Sometimes redis can be protected by a password, we'll need a optionnal field in the form to handle that
- Error page is under work, it need to be implemented
​
Testing:
​
- Testing setup is ready but we definitely need test coverage
​
Bugs found :
​
- Sometime the user is not redirected correctly
- Send different error status from the server to the client so Message modal can interpret response from server easily
​
## License
​
[MIT](https://choosealicense.com/licenses/mit/)
​
## Team
​
Garrett Yan //
garrettyan6@gmail.com
​
Anna Ivakhnik //
ai1337@nyu.edu
​
Patrice Pellan //
pellan.patrice@gmail.com
​
David Koo //
jonghyunkoo92@gmail.com

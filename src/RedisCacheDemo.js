import React from 'react'
import withoutCache from './images/withoutCache.png'
import withCache from './images/withCache.png'
import './App.css'

const RedisCacheDemo = () => {
    return (
        <div className="container">
            <h1 className="cache-header">Redis Cache Demo</h1>
            <h3>You could download the source code from <a href="https://github.com/TENGQU1986/redis-cache-demo">here</a>.</h3>
            <br></br>
            <h4>First, let's see if we just simply fetch data every single time when page initial rendering. It takes pretty much the same amount of time to fetch data, in this particular case, around 800ms to 3 seconds. By the way, this API is a fake API provided by Jsonplaceholder and it contains over 35,000 items.</h4>
            <img src={withoutCache} alt="" width="1000" height="900"/>
            <h4>Then we just fetch the data through API at the very first time and cache those data in the redis cache database, then you will see the fetch time is extremely faster than fetching from the API</h4>
            <img src={withCache} alt="" width="1000" height="900"/>


            

        </div>
    )
}

export default RedisCacheDemo

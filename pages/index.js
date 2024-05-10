import React, { useState, useEffect } from 'react';
import styles from '@/styles/index.module.css'

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className='heading'>Kenya Population as Per 2019 National Census Exercise</h2>
                <p className="text-muted">A choropleth map displaying Kenya population density as per the national census conducted <br />in 2019
                    Each County, details displayed by the map include, total population and number of each gender.</p>
            </div>
        </div>
    );
}

export default Home;
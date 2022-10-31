import classes from '../styles/pages/index.module.scss';

export default function Home() {
  return (
    <main className="container-fluid">
      <div className={`${classes.intro} row`}>
        <div className="col">
          <h2>
            PLACE HOLDER FOR SOME SORT OF IMAGE
          </h2>
        </div>
        <div className="col">
          <h1>
            This is our homepage for shop WELCOME!  
          </h1>
        </div>
      </div>

      <div className={`${classes.whyUs} row`}>
        <div className='col'>
          Placeholder
        </div>
        <div className='col'>
          Placeholder
        </div>
        <div className='col'>
          Placeholder
        </div>
      </div>
    </main>
  )
}

import React from 'react';
import '../assets/scss/utilities.scss';
import '../components/ProdList/prodList.scss';
import ProdList from '../components/ProdList/ProdList.js';
import PersonalCard from './components/PersonalCard/PersonalCard';
import PersonalCardLogin from './components/PersonalCard/PersonalCard_Login';
import PersonalCardLogout from './components/PersonalCard/PersonalCard_Logout';
import HeroBanner from './components/HeroBanner/HeroBanner';
const Homepage = () => {
  return (
    <div>
      <header>
        <div className='container container--lg'>
          <div className='row'>
            <div className='col-12'></div>
          </div>
        </div>
      </header>
      <main>
        <div className='container container--lg'>
          <div className='row'>
            <div className='col-12'>
              <section>
                <div className='row'>
                  <div className='col-2'></div>
                  <div className='col-4'></div>
                  <div className='col-2'>
                    <PersonalCardLogin />
                  </div>
                  <div className='col-2'>
                    <PersonalCardLogout />
                  </div>
                  <div className='col-2'>
                    <PersonalCard />
                  </div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-2'></div>
                  <div className='col-8'>
                    <HeroBanner />
                  </div>
                  <div className='col-2'></div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-2'></div>
                  <div className='col-5'></div>
                  <div className='col-5'></div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-12'></div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-12'></div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-6'></div>
                  <div className='col-6'></div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-12'>
                    <ProdList />
                  </div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-12'></div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-12'></div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-12'></div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-12'></div>
                </div>
              </section>
              <section>
                <div className='row'>
                  <div className='col-12'></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className='container container--lg'>
          <div className='row'>
            <div className='col-12'></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

import React from 'react';
import './More.css';

function More() {
  return (
    <div className='moreComponent'>
      <h1 className="appTitle">Explore SEOUL</h1>

      <div className='inquiries'>
        <img className='call' src="/assets/icons/inquiries.png" alt="Tourism Inquiries" />
        <p>Tourism Inquiries <span>1330</span> </p>
      </div>

      <div className='divider'></div>

      <div className='moreMenuContainer'>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src="/assets/icons/preparing.png" alt="Preparing for the Trip" />
          </div>
          <p className='moreMenuText'>Preparing for the Trip</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src="/assets/icons/useful_phrases.png" alt="Useful Phrases" />
          </div>
          <p className='moreMenuText'>Useful Phrases</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src="/assets/icons/ebook.png" alt="Maps & Guidebooks" />
          </div>  
          <p className='moreMenuText'>Maps & Guidebooks</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src="/assets/icons/shopping.png" alt="Shopping List" />
          </div>
          <p className='moreMenuText'>Shopping List</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src="/assets/icons/tax.png" alt="Tax Refunds" />
          </div>
          <p className='moreMenuText'>Tax Refunds</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src="/assets/icons/medical.png" alt="Medical Tourism" />
          </div>
          <p className='moreMenuText'>Medical Tourism</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src="/assets/icons/resources.png" alt="Helpful Apps & Resources" />
          </div>
          <p className='moreMenuText'>Helpful Apps & Resources</p>
        </div>
      </div>
    </div>
  );
}

export default More;

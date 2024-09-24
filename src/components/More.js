import React from 'react'
import './More.css'

function More() {
  return (
    <div className='moreComponent'>
      <h1 className="appTitle">Explore SEOUL</h1>

      <div className='inquiries'>
        <img className='call' src='./assets/icons/inquiries.png' />
        <p>Tourism Inquiries <span>1330</span> </p>
      </div>

      <div className='divider'></div>

      <div className='moreMenuContainer'>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src='./assets/icons/preparing.png' />
          </div>
          <p className='moreMenuText'>Preparing for the Trip</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src='./assets/icons/useful_phrases.png' />
          </div>
          <p className='moreMenuText'>Useful Phrases</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src='./assets/icons/ebook.png' />
          </div>  
          <p className='moreMenuText'>Maps & Guidebooks</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src='./assets/icons/shopping.png' />
          </div>
          <p className='moreMenuText'>Shopping List</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src='./assets/icons/tax.png' />
          </div>
          <p className='moreMenuText'>Tax Refunds</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src='./assets/icons/medical.png' />
          </div>
          <p className='moreMenuText'>Medical Tourism</p>
        </div>
        <div className='moreMenu'>
          <div className='moreMenuImage'>
            <img className='moreMenuIcon' src='./assets/icons/resources.png' />
          </div>
          <p className='moreMenuText'>Helpful Apps & Resources</p>
        </div>
      </div>

    </div>
  )
}

export default More
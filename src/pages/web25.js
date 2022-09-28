import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import * as styles from '../styles/web25.module.css';

const Web25 = () => {
  const [formNames, setFormNames] = useState({
    EMAIL: '',
    NAME: '',
  });

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.web25_container}>
        <h2>Web 2.5</h2>
        <div>
          <p>
            Web 2.5 Academy is a program designed to include a broader range of
            participants with basic programming skills, primarily in Python or
            Javascript, and to direct them to simple but concrete Web3 projects.
            As a result, we hope to involve a whole new group of talented
            individuals in the blockchain industry who will be able to establish
            their careers on Web3 projects from the start. The training program
            aims to strengthen communities outside of the Belgrade and Novi Sad
            ecosystems, specifically but not exclusively in Majdanpek, Pirot,
            Novi Pazar, Pančevo, and Niš.The Web 2.5 Academy has a hybrid
            concept where the first and last lectures will be live and the rest
            online. Participants will have the opportunity to meet the lecturers
            and learn about the program during the introductory lecture.
          </p>
          <p>The program will consist of 6 modules:</p>
          <p>
            Fundamentals of Cryptography - Acquire a working knowledge of
            cryptographic primitives used in blockchain technology: hash
            functions, public key cryptography systems, encryption and digital
            signatures.
          </p>
          <p>
            Basics of Blockchain Technology, Ledger Systems and Cryptocurrencies
            - Blockchain as a data structure, taxonomy of distributed ledger
            systems, the concept of consensus and consensus algorithms (proof of
            work, proof of stake, proof of authority).
          </p>
          <p>
            Javascript and NodeJS - Introduction to programming in JavaScript,
            language concepts and structures (objects, functions), synchronous
            and asynchronous programming, NodeJS as a platform.
          </p>
          <p>
            Basics of Smart Contracts - Solidity, EVM - Introduction to
            programming blockchain and Ethereum Virtual Machine (transactions,
            accounts, storage), writing smart contracts in Solidity language and
            supporting tools (Remix IDE)
          </p>
          <p>
            Web Frontend - HTML, CSS, JS - Basics of Web Programming, HTML and
            Hypertext, Web Page Structure and DOM, Javascript in Browser
          </p>
          <p>
            Decentralized applications and Web integration of smart contracts -
            Web3 concept and decentralized applications, IPFS storage, synergy
            of previous knowledge and concepts (Solidity, JS, Web) creates a
            complete and functional application.
          </p>
        </div>
        <div className={styles.form_container}>
          <div
            id='mc_embed_signup'
            className={styles.mc_embed_signup}
          >
            <form
              action='https://moonstruck.us8.list-manage.com/subscribe/post?u=ff76fdc3d2ef1c5b5a35a1cc3&amp;id=2bb2626081&amp;f_id=009273e0f0'
              method='post'
              id='mc-embedded-subscribe-form'
              name='mc-embedded-subscribe-form'
              className='validate'
              target='_blank'
              noValidate
            >
              <div id='mc_embed_signup_scroll'>
                <h2>Web 2.5 applications</h2>
                <div className='indicates-required'>
                  {/* <span className='asterisk'>*</span> indicates required */}
                </div>
                <div className='mc-field-group'>
                  <label htmlFor='mce-EMAIL'>
                    Email Address <span className='asterisk'>*</span>
                  </label>
                  <input
                    type='email'
                    value={formNames.EMAIL}
                    onChange={(e) =>
                      setFormNames({ ...formNames, EMAIL: e.target.value })
                    }
                    name='EMAIL'
                    className='required email'
                    style={{ width: '100%', color: 'black' }}
                    id='mce-EMAIL'
                    required
                  />
                  <span
                    id='mce-EMAIL-HELPERTEXT'
                    className='helper_text'
                  ></span>
                </div>
                <div className='mc-field-group'>
                  <label htmlFor='mce-FNAME'>First Name </label>
                  <input
                    type='text'
                    value={formNames.firstName}
                    name='NAME'
                    className=''
                    style={{ width: '100%', color: 'black' }}
                    onChange={(e) =>
                      setFormNames({ ...formNames, FNAME: e.target.value })
                    }
                    id='mce-FNAME'
                  />
                  <span
                    id='mce-FNAME-HELPERTEXT'
                    className='helper_text'
                  ></span>
                </div>
                <div hidden={true}>
                  <input
                    type='hidden'
                    name='tags'
                    defaultValue={4873877}
                  />
                </div>
                <div
                  id='mce-responses'
                  className='clear foot'
                >
                  <div
                    className='response'
                    id='mce-error-response'
                    // style='display:none'
                    style={{ display: 'none' }}
                  ></div>
                  <div
                    className='response'
                    id='mce-success-response'
                    // style='display:none'
                    style={{ display: 'none' }}
                  ></div>
                </div>
                {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div
                  // style='position: absolute; left: -5000px;'
                  style={{ position: 'absolute', left: '-5000px' }}
                  // aria-hidden='true'
                  hidden={true}
                >
                  <input
                    type='text'
                    name='b_ff76fdc3d2ef1c5b5a35a1cc3_2bb2626081'
                    tabIndex={-1}
                    defaultValue=''
                  />
                </div>
                <div className='optionalParent'>
                  <div className={`${styles.chimp_container} clear foot`}>
                    <input
                      type='submit'
                      defaultValue={'Subscribe'}
                      name='subscribe'
                      id='mc-embedded-subscribe'
                      // className='button'
                      className={styles.submit_btn}
                    />
                    <p className='brandingLogo'>
                      <a
                        className={styles.chimp_logo}
                        href='http://eepurl.com/h-6iJr'
                        title='Mailchimp - email marketing made easy and fun'
                      >
                        <img
                          src='https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg'
                          alt=''
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web25;

export const Head = () => <title>Web 2.5</title>;

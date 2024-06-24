

function Homepage (params) {
    
    return (
        <>
                <div className="Container">
                    <div className="header">
                    <div className="headerMiddle">

                        <div className="headerRight">
                            <div className="headerLeft">
                                <h1 class="first1">Movie Mania</h1>
                            </div>
                            <div className="headerclear">
                                <a href="" className="b">Home</a>
                                <a href="" className="b">Tv Shows</a>
                                <a href=""className="b">Movies</a>
                                <a href=""className="b">Upcoming</a>
                                <a href=""className="b">Trailers</a>
                            </div>
                            <div className="headerboth">
                            <div class="input-wrapper">
                            <button class="icon">
                                <svg
                                width="25px"
                                height="25px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                    stroke="#fff"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M22 22L20 20"
                                    stroke="#fff"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                </svg>
                            </button>
                            <input type="text" name="text" class="input" placeholder="search.." />
                            </div>

                            </div>
                        </div>
                    


                        <div className="content">
                            <div className="contentLeft"></div>
                            <div className="contentMiddle">
                                    <div className="Advert">
                                        <h1 className="Adverttext">CLOAK & DAGGER</h1>
                                    </div>
                                    <div className="nav">
                                        <h3 className="navtext">2 Seasons</h3>
                                    </div>
                                    <div className="nav-opt">
                                        <div className="rating">
                                        <input value="5" name="rate" id="star5" type="radio"/>
                                            <label title="text" for="star5"></label>
                                            <input value="4" name="rate" id="star4" type="radio"/>
                                            <label title="text" for="star4"></label>
                                            <input value="3" name="rate" id="star3" type="radio"checked=""></input> 
                                            <label title="text" for="star3"></label>
                                            <input value="2" name="rate" id="star2" type="radio"/>
                                            <label title="text" for="star2"></label>
                                            <input value="1" name="rate" id="star1" type="radio"/>
                                            <label title="text" for="star1"></label>
                                        </div>
                                    </div>
                                    <div className="textbox">
                                        <div className="textbox-a"><p>Action</p></div>
                                        <div className="textbox-a"><p>Adventure</p></div>
                                        <div className="textbox-a"><p>Drama</p></div>
                                    </div>
                                    <div className="feat">
                                        <div className="featcard"><svg width="67px" height="67px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18" stroke="#292D32" stroke-width="2.112" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 18V6" stroke="#292D32" stroke-width="2.112" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
                                        <button className="featwrap"><a href="https://www.youtube.com/watch?v=Bglj2PeVNTA"><svg fill="#f0efef" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#f0efef"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.303 8l11.394 7.997L11.303 24z"></path></g></svg></a></button>
                                    </div>
                                    <div className="smaller">
                                        <p className="smallertext">
                                            Tandy Bowen and Tyron johnson, two
                                            teenagers from different backgrounds, acquired
                                            superpowers while forming a romantic relationship.
                                            they soon realize that their powers work better
                                            when they are together, but their feelings for each other.
                                        </p>
                                    </div>
                            </div>
                        </div>


                        <div className="vid">
                                <div className="vidtext">
                                    <img src="src/assets/IMAGES/img_0708.webp" className="vidimage" alt=""/>
                                    <p className="smallertext">The punisher</p>
                                </div>

                                <div className="vidtext">
                                    <img src="src/assets/IMAGES/dre devil.jpg" className="vidimage" alt=""/>
                                    <p className="smallertext">Daredevil</p>
                                </div>

                                <div className="vidtext">
                                    <img src="src/assets/IMAGES/T.super portrait.webp" className="vidimage" alt=""/>
                                    <p className="smallertext">Man of steel</p>
                                </div>

                                <div className="vidtext">
                                    <img src="src/assets/IMAGES/OIP.jpeg" className="vidimage" alt=""/>
                                    <p className="smallertext">Ways of Waters</p>
                                </div>

                            
                                <div className="vidtext">
                                    <img src="src/assets/IMAGES/R (1).jpeg" className="vidimage" alt=""/>
                                    <p className="smallertext">Cloak&Dagger</p>
                                </div>

                                <div className="vidtext">
                                    <img src="src/assets/IMAGES/OIP (1).jpeg" className="vidimage" alt=""/>
                                    <p className="smallertext">Black Adam</p>
                                </div>
                                
                                <div className="vidtext">
                                    <img src="src/assets/IMAGES/OIP (2).jpeg" className="vidimage" alt=""/>
                                    <p className="smallertext">Avatar</p>
                                </div>  

                                <div className="vidtext">
                                    <img src="src/assets/IMAGES/odinson.jpeg" className="vidimage" alt=""/>
                                    <p className="smallertext">Thor Ragnarok</p>
                                </div>
                        </div>

                    </div>
                    </div>
          

                    
                    <div className="likes">
                        <section className="likes-text">
                            <h2>Go ahead, Stream free</h2><br/>

                        <div className="buttondiv">
                                <p className="like-text-paragraph">With Movie Mania you can watch over 20,000 free movies and 
                                    shows Plus Live Tv on almost any device. What are
                                    you waiting for?
                                </p>
                        </div>
                        
                        <button className="btn-17">
                            <span className="text-container">
                                <span className="text">Watch Free</span>
                            </span>
                            </button>
                        </section>
                        </div>

                </div>
        </>
    )
}

export default Homepage
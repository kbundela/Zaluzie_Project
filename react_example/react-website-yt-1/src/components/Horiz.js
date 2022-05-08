import React, {useState} from 'react';
import '../App.css';
import './Horiz.css';

function Horiz() {
    const [age1, setAge1] = useState();
    const [age2, setAge2] = useState();
    const [age3, setAge3] = useState();
    const [age4, setAge4] = useState();

const handleChange1 = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setAge1(value);
};

const handleChange2 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAge2(value);
  };

const handleChange3 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAge3(value);
  };

const handleChange4 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAge4(value);
  };

  return (
            <div className='horiz-container'>   
                <div className='title'><h3>ISOLINE PRIM</h3></div>      
                <div className='blokVnitrek'>                
                    <div className="stredCol">
                        <div className="stred"> </div>
                    
                    <div className="levy">                        
                        <div className="pocet">
                        <div className="popis">Počet:</div>
                        <div className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="1" value={age1} id="pocet"
                                   name="pocet" maxLength="4" onChange={handleChange1} 
                                   onKeyDown="LUKY.prepocitejCenu()" autoComplete="off"/>
                        </div>
                    </div>
                    <div className="sirka">
                        <span className="popis">Šířka:</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="0" value={age2} id="sirka" 
                                   name="sirka" maxLength="4" onChange={handleChange2} 
                                   onKeyDown="LUKY.prepocitejCenu()" autoComplete="off"/>
                                <span className="jednotka">mm</span>
                        </span>
                        <span className="limit">300 - 2000 mm</span>
                    </div>
                    <div className="vyska">
                        <span className="popis">Výška:</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="0" value={age3} id="vyska" 
                                   name="vyska" maxLength="4" onChange={handleChange3}
                                   onKeyDown="LUKY.prepocitejCenu()" autoComplete="off" />
                            <span className="jednotka">mm</span>
                        </span>
                        <span className="limit">300 - 2200 mm</span>
                    </div>
                    <div className="cenaRozmery">
                        <span className="popis">Cena:</span>
                        <span className="hodnota">
                            <span id="cenaRozmery"> 0 </span> 
                            CZK 
                        </span>
                    </div>
                    </div></div>

                    <div className="infoCol">
                    <div className="info">
                        <div className="info_Text">
                            Maximální rozměry naleznete v sekci TECHNICKÝ POPIS <br /> <br />Dodací lhůta je 7-9 dnů. <br /> <br />
                        </div>
                        
                        <div>&nbsp;</div>
                        <div className="info_Button">
                            <a href="https://www.zaluzienejlevneji.shop/Instance/lukyshop/Sablona/Sablona/Komponenta/Luky/Detail/Slozka23/Cenik/CZ_Navod_na_vymereni_a_montaz.pdf">
                                NÁVOD NA ZAMĚŘENÍ A MONTÁŽ
                            </a>
                        </div>
                        <div className="info_Button">
                            <a href="https://www.zaluzienejlevneji.shop/technicky-popis-s33CZ">
                                TECHNICKÝ POPIS
                            </a>
                        </div>
                        <div className="info_Button">
                            <a href="https://www.zaluzienejlevneji.shop/fotogalerie-s65CZ">
                                FOTOGALERIE
                            </a>
                        </div>
                    </div>
                    </div> 

                </div>
                <div className = 'further_options'>                         
                    <div className='radio_cell'>                
                        <div className="stahovaniPopis"> Strana ovládání </div>                    
                        <div className="stahovaniHodnoty">
                            <div>                        
			                <label>
                                <div class = 'vlevo'/>
                                <div class = 'hh1'>
                                    <input type="radio" name={'ovladani'} id={'vlevo'} value={'vlevo'}
                                        defaultChecked ={'true'} onChange="LUKY.prepocitejCenu()"/>
                                    <span>vlevo</span>      
                                </div>                      
                            </label>
                            </div>
                            <div>                        
			                <label>
                                <div class = 'vpravo'/>
                                <div class = 'hh1'>
                                    <input type="radio" name={'ovladani'} id={'vpravo'} value={'vpravo'}
                                        onChange=""/>
                                    <span>vpravo</span>      
                                </div>                      
                            </label>
                            </div>                        
                        </div> 
                    </div>                       
                    <div className="delkaOvladani">
                        <span className="popis">Délka ovládání</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="700" value={age4} name="delkaOvladani"
                                    maxLength="4" onChange={handleChange4} onKeyDown="LUKY.prepocitejCenu()"/>
                            <span className="jednotka">mm</span>
                        </span>
                    </div>
                    <div className="brzda">
                        <input type="checkbox" name="brzda" id="brzda" onChange="LUKY.prepocitejCenu();"/>
                        <label htmlFor="brzda" className="hodnota">
                            <span className="nazev">
                                Brzda (zastaví žaluzii v požadované poloze/zabrání samovolnému sjíždění)
                                <span className="cena"><br /> +25 CZK </span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        );
}

export default Horiz;

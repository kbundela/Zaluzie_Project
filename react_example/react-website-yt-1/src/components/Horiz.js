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
                            Přicházíme na trh s novou generací ISOLINE žaluzií. Tato žaluzie je koncepčně novým nástupcem generace žaluzií ISOLINE a ISOLINE LOCO. Spojuje v sobě všechny technické přednosti těchto typů. Díky spojení horního profilu a krycí lišty v jeden celek vzniklo kompaktní řešení, které odstraňuje neduhy předchozích generací. Je ovládaná řetízkem a nabízí tradiční barevnou škálu odstínů lamel, barevného sladění horního a dolního profilu.
                                <br /><br />
                            Horizontální žaluzie stále představují nejrozšířenější způsob protisluneční ochrany a staly se nedílnou součástí interiéru, ochraňují nejen proti slunečním paprskům, regulují světlo v místnosti, ale chrání i vaše soukromí. Využití horizontálních žaluzií je mnohostranné a jejich barevná škála dovoluje harmonicky sladit barvy v místnosti s barevnými doplňky a vytvořit tak příjemnou atmosféru dle vašeho vkusu. Výhodou je jejich jednoduchost, rychlost montáže, minimální údržba a cenová dostupnost.
                                <br /><br />
                            Horizontální žaluzii lze zaměřit pomocí návodu.<br />Šíře výrobku je šíře lamel, horní držáky přesahují tuto šíři na každé straně o 35 mm.
                                <br /><br />
                            Důležitá je hloubka zasklívací lišty. V případě, že je menší nez 19 mm, je nutné doobjednat speciální vymezovací podložky. Žaluzie se musí v okně volně pohybovat! 
                                <br /><br />
                            <b>Pozor některá okna nemusí být zcela rovná, měřte proto šířku v různých výškách.</b>
                                <br /><br />
                        </div>
                        <div className='manual_and_contact'>
                           <span>
                           Pro správné určení rozměrů se podívejte na <a className='first_link' href="https://www.google.com/">video návod</a> nebo si přečtěte <a className='second_link' href="https://www.google.com/">návod zaměření</a>.     
                                <br />
                                Pokud si chcete objednat zaměření naším technikem, pak nás neváhejte <a className='third_link' href="https://www.google.com/">kontaktovat</a>.
                            </span> 
                        </div>

                        <div className='ph_contact'>
                            <span className='contact_span'> 
                                Nevíte si rady se zaměřením? Máte jiný požadavek? <br /> Volejte <b>+420 777 292 384</b>
                            </span> 
                            <i class="fa fa-phone"></i>
                        </div>

                        <div className='links'>
                            <ul>
                                <li className='link_one'>
                                <i class="fa fa-caret-right"></i> <a href="https://www.google.com/">Video návod na zaměření</a>
                                </li>
                                <li>
                                <i class="fa fa-caret-right"></i> <a href="https://www.google.com/">Video návod na montáž</a>
                                </li>
                                <li className='link_three'>
                                <i class="fa fa-caret-right"></i> <a href="https://www.google.com/">Návod na zaměření [PDF]</a>
                                </li>
                                <li>
                                <i class="fa fa-caret-right"></i> <a href="https://www.google.com/">Návod na údržbu</a>
                                </li>
                            </ul> 
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

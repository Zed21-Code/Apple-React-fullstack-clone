import React from 'react'
import Top from '../../components/Top/Top'
import PageComponent from '../../components/PageComponent/PageComponent'
import './tv.css'
const style = {
  textAlign: 'center'
}

function Tv() {
  return (
    <div>
        <br /><br /><br /><br />
      <h1 style={style}></h1>
         <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Tv</div>
            </div>
          </div>

          <Top 
            bgcontainer='third-hightlight-wrapper2'
            news=''
           new-alerts='imgbg'
            title='The future hits home.'
            description=''
            pricedesc='Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Elevate movie night with theater-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks, and thermostats using Siri. All with the security and privacy of Apple.'
            // firstlink=''
            // secondlink=''
            caption1=''
            caption2=''  
            // linkwraper='links-wrapper'
            titleclassname='title-wraper bold black'
            descclassname='description-wrapper black'
            priceclassname='price-wrapper bold black'
      />
      
      <PageComponent 
        body_bg='bg_black text-center ms-5 m-3 '
        description='HomePod'
        descriptionclassname="white description-wraper2"
        title='Profound sound.'
        titleclassname="white title-wraper2 bold"
        pricedesciption='$299'
        priceclassname='white bold_price '
        linkwraper='btn_link1'
        secondlink='Apply now'
        fourimg={'https://www.apple.com/v/tv-home/j/images/overview/homepod__eam53jjm772a_small.jpg'}
        rightheight='img_hgt'

        body_bg2='bg_white text-center me-5 m-3'
        description2='HomePod mini'
        descriptionclassname2="description-wraper2"
        title2='Surprising sound for its size.'
        titleclassname2=" title-wraper2 bold"
        pricedesciption2='$99'
        priceclassname2=' bold_price '
        linkwraper2='btn_link1'
        rightheight2='img_hgt2'
        secondlink2='Apply now'
        fourimg2={'https://www.apple.com/v/tv-home/j/images/overview/room_filling_sound__zagu3551kwyi_large.jpg'}
      />
      <PageComponent 
        body_bg='bg_white text-center ms-5 m-3 '
        description=''
        descriptionclassname=" description-wraper2"
        title='The Apple experience. Cinematic in every sense.'
        titleclassname=" title-wraper2 bold"
        pricedesciption='Starting at $129'
        priceclassname='bold_price '
        linkwraper='btn_link1'
        secondlink='Apply now'
        fourimg={'https://www.apple.com/v/tv-home/j/images/overview/apple_tv_4k__b30wcqp0pdle_large.jpg'}
        rightheight='img_hgt2'
        body_bg2='bg_white text-center me-5 m-3'
        description2='Home app'
        descriptionclassname2="description-wraper2"
        title2='The foundation for a smarter home.'
        rightheight2='img_hgt2'
        titleclassname2=" title-wraper2 bold"
        pricedesciption2=''
        priceclassname2=' bold_price '
        linkwraper2='btn_link1'
        secondlink2='Apply now'
        fourimg2={'https://www.apple.com/v/tv-home/j/images/overview/homeapp__cpc1k972xys2_large.jpg'}
      />
       
 
        
        </div>
  )
}

export default Tv

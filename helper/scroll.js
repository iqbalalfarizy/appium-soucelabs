import { driver } from '@wdio/globals'

async function scrollTo(a,b){

    await driver.pause(1000)
    await driver
        .action('pointer')
        .move({ x: 250, y: a })
        .down()
        .pause(100)
        .move({ duration: 200, x: 250, y: b })
        .up()
        .perform()
      
    
}

export default scrollTo
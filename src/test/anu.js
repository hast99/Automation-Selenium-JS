const { Builder, By, Keys, until } = require('selenium-webdriver')
driver = new Builder().forBrowser('firefox').setFirefoxOptions().build()

describe('Project Name', function () { // nama project suite (grand grand parent)
    describe('Module Name', function () { // nama module suite (grand parent)
        describe('Submodule Name', function () { // nama submodule suite/ desc terkecil (parent)
            before(async function () {
                await driver.get(process.env.URL)
            })

            after(async function () {
                await driver.sleep(300000)
                await driver.quit()
            })

            it('[TC001]', async function () {
                await driver.findElement(By.xpath('//button[contains(text(),"Allow all")]')).click()
                const awalan = await driver.findElements(By.xpath('//span[@wordnr]'))
                const inputField = await driver.wait(until.elementLocated(By.xpath("//input[@id='inputfield']")))

                for (let i = 0; i < awalan.length; i++) {
                    console.log(await awalan[i].getText())
                    const a = await awalan[i].getText()
                    const b = a.split("")

                    for (let j = 0; j < b.length; j++) {
                        await inputField.sendKeys(b[j])
                    }
                    await driver.sleep(900)
                    await inputField.sendKeys(" ")
                }
            })
        })
    })
})



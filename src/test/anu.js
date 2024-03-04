const { Builder, By, Keys, until } = require('selenium-webdriver')
driver = new Builder().forBrowser('firefox').setFirefoxOptions().build()

describe('Project Name', function () { // nama project suite (grand grand parent)
    describe('Module Name', function () { // nama module suite (grand parent)
        describe('Submodule Name', function () { // nama submodule suite/ desc terkecil (parent)
            before(async function () {
                await driver.get(process.env.URL)
            })

            after(async function () {
                await driver.sleep(3000)
                await driver.quit()
            })

            it('[TC001] Dapat mengakses halaman Career', async function () {
            })
        })
    })
})

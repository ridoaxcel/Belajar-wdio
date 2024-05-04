import { $, expect, browser } from '@wdio/globals'
import Page from '../pageobjects/page.js'

const page = new Page()

describe('F001 - Fitur Register', function(){
    it('R001 - Register dengan inputan baru', async function () {
	
        // await browser.pause(2000)
    
        // const targetElement = await $('.vc_single_image-wrapper[href="https://monokastore.com/product-category/sneakers/"]')
        // await targetElement.click()
    
        // await browser.pause(2000)
    
        // === selector text
        // . artinya case insensitive
        // * artinya partial text
        // const caption = await $('h2.*=kualitas')
        // expect(caption).toHaveText('Solusi Kualitas Hidup Anda')
    
        // === selector css
        // const tombolWA = await $('a[href="https://wa.me/6282347905543?text=Hai%20Raja%20Madu%20Sulawesi"]')
        // await tombolWA.click()
    
        // === expect suatu text ada di sebuah halaman
        // const akunWA = await $('img[alt="Profile Picture"] + h3').getText()
        // expect(akunWA).toBe('Raja Madu Sulawesi')
    
        // === selector berdasarkan text yang ada di link
        // await $('=BELI SEKARANG').click()
    
        //tester register positif
        // await browser.url('https://google-gruyere.appspot.com/529375416532356474177985638485227213850/login')
        
        // const usernameInput = await browser.$('input[name="uid"]');
        // const passwordInput = await browser.$('input[name="pw"]');
    
        // await usernameInput.setValue('asd');
        // await passwordInput.setValue('123');
    
        // const loginButton = await browser.$('input[type="submit"]');
        // await loginButton.click();
        // const refreshElement = await browser.$('.has-refresh');
        // await expect(refreshElement).toHaveTextContaining('Home')
        // await browser.pause(2000);
    
        //tester dari awal
            await browser.url('https://google-gruyere.appspot.com/start');
            const agreeStartLink = await browser.$('h2 a');
            await agreeStartLink.click();
            const currentUrl = await browser.getUrl();
            await browser.url(currentUrl+'/newaccount.gtl');
            const usernameInput = await browser.$('input[name="uid"]');
            const passwordInput = await browser.$('input[name="pw"]');
            await usernameInput.setValue('asd');
            await passwordInput.setValue('123');
            const createButton = await browser.$('input[type="submit"]');
            await createButton.click();
            const account = await browser.$('.message');
            await expect(account).toHaveTextContaining('Account created.')
    })
    
    it('R002 - Register dengan username dan password yang sudah ada', async function () {
            const idREG = await browser.$('#menu-right a:nth-child(2)');
            await idREG.click();
            const currentUrlBefore = await browser.getUrl();
            const usernameInput = await browser.$('input[name="uid"]');
            const passwordInput = await browser.$('input[name="pw"]');
            await usernameInput.setValue('asd');
            await passwordInput.setValue('123');
            const createButton = await browser.$('input[type="submit"]');
            await createButton.click();
            const account = await browser.$('.message');
            await expect(account).toHaveTextContaining('User already exists.').toHaveUrl(currentUrlBefore)
    })

    it('R003 - Register dengan username yang sudah ada dan invalid password', async function () {
        const goHome = await browser.$('#menu-left a');
        await goHome.click();
        const currentUrl = await browser.getUrl();
        await browser.url(currentUrl+'/newaccount.gtl');
        const currentUrlBefore = await browser.getUrl();
        const usernameInput = await browser.$('input[name="uid"]');
        const passwordInput = await browser.$('input[name="pw"]');
        await usernameInput.setValue('asd');
        await passwordInput.setValue('invali_password');
        const createButton = await browser.$('input[type="submit"]');
        await createButton.click();
        const account = await browser.$('.message');
        await expect(account).toHaveTextContaining('User already exists.').toHaveUrl(currentUrlBefore)
    })

    it('R004 - Register dengan username yang sudah ada dan password kosong', async function () {
        const goHome = await browser.$('#menu-left a');
        await goHome.click();
        const currentUrl = await browser.getUrl();
        await browser.url(currentUrl+'/newaccount.gtl');
        const currentUrlBefore = await browser.getUrl();
        const usernameInput = await browser.$('input[name="uid"]');
        const passwordInput = await browser.$('input[name="pw"]');
        await usernameInput.setValue('asd');
        await passwordInput.setValue('');
        const createButton = await browser.$('input[type="submit"]');
        await createButton.click();
        const account = await browser.$('.message');
        await expect(account).toHaveTextContaining('User already exists.').toHaveUrl(currentUrlBefore)
    })

    it('R005 - Register dengan username baru dan password kosong', async function () {
        const goHome = await browser.$('#menu-left a');
        await goHome.click();
        const currentUrl = await browser.getUrl();
        await browser.url(currentUrl+'/newaccount.gtl');
        const currentUrlBefore = await browser.getUrl();
        const usernameInput = await browser.$('input[name="uid"]');
        const passwordInput = await browser.$('input[name="pw"]');
        await usernameInput.setValue('username_baru');
        await passwordInput.setValue('');
        const createButton = await browser.$('input[type="submit"]');
        await createButton.click();
        const account = await browser.$('.message');
        await expect(account).toHaveTextContaining('Account created.').toHaveUrl(currentUrlBefore)
    })

    it('R006 - Register dengan username kosong dan password kosong', async function () {
        const goHome = await browser.$('#menu-left a');
        await goHome.click();
        const currentUrl = await browser.getUrl();
        await browser.url(currentUrl+'/newaccount.gtl');
        const currentUrlBefore = await browser.getUrl();
        const usernameInput = await browser.$('input[name="uid"]');
        const passwordInput = await browser.$('input[name="pw"]');
        await usernameInput.setValue('');
        await passwordInput.setValue('');
        const createButton = await browser.$('input[type="submit"]');
        await createButton.click();
        const account = await browser.$('.message');
        await expect(account).toHaveTextContaining('Account created.').toHaveUrl(currentUrlBefore)
    })
})

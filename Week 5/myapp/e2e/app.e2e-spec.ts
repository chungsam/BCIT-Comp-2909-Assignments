import { MyappPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('myapp App', function() {
    let page: MyappPage;

    beforeEach(() => {
        page = new MyappPage();
    });

    it('Testing one element by tag name.', () => {
        page.navigateTo();
        const headerElement = element(by.tagName('h1'));
        expect(headerElement.getText()).toEqual('Morning Show');
    });

    it('Testing a list of items.', () => {
        // Get list of elements.
        const elements = element.all(by.tagName('li'));
        expect(elements.count()).toEqual(3);

        // Check text of first element.
        expect(elements.get(0).getText()).toEqual('John');
    })

});

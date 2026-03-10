import { LoginPage } from "../../../support/pages/LoginPage";
import { DashboardPage } from "../../../support/pages/DashboardPage";
import { AreaPage } from "../../../support/pages/AreaPage";


describe('Area Masterfile ', () => {
  beforeEach(() => {
    LoginPage.open();
    LoginPage.loginAsHrUser();
    LoginPage.assertLoginSuccess();

    DashboardPage.openHrApp();
    DashboardPage.openMasterFile();
    DashboardPage.openAreaMF();

  })
  it('Adding Valid Data', () => {
    
    AreaPage.validatePage();
    AreaPage.validData();
    AreaPage.validateData();

  })
})
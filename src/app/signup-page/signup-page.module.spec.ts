import { SignupPageModule } from './signup-page.module';

describe('SignupPageModule', () => {
  let signupPageModule: SignupPageModule;

  beforeEach(() => {
    signupPageModule = new SignupPageModule();
  });

  it('should create an instance', () => {
    expect(signupPageModule).toBeTruthy();
  });
});

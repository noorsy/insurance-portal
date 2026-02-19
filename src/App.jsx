import { useState } from 'react';
import './App.css';
import logoImg from '../images/logo.png';
import phoneSvg from '../images/Phone.svg';
import userCircleSvg from '../images/UserCircle.svg';
import doneImg from '../images/done.png';
import pciSvg from '../images/pci.svg';
import secureSvg from '../images/secure.svg';

function BackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IdentityIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="20" r="10" />
      <path d="M16 54c0-8.837 7.163-16 16-16s16 7.163 16 16" />
      <circle cx="32" cy="32" r="8" strokeDasharray="2 2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 10-16 0" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function VerifyScreen({ onVerify }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [ssnLast4, setSsnLast4] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accountNumber.trim() && ssnLast4.replace(/\D/g, '').length === 4) {
      onVerify();
    }
  };

  return (
    <>
      <header className="ins-header ins-header-home ins-header-login">
        <div className="ins-header-logo-wrap">
          <img src={logoImg} alt="Global Finance" className="ins-logo-img" />
        </div>
        <button type="button" className="ins-header-phone" aria-label="Call">
          <img src={phoneSvg} alt="" className="ins-header-icon-img" width={32} height={32} />
        </button>
      </header>

      <main className="ins-main ins-main-home">
        <section className="ins-card ins-card-home">
          <div className="ins-card-icon" aria-hidden>
            <img src={userCircleSvg} alt="" className="ins-card-icon-img" width={64} height={64} />
          </div>
          <h1 className="ins-card-title">Let&apos;s verify your identity</h1>
          <p className="ins-card-sub">This is essential for your data security.</p>
          <form onSubmit={handleSubmit} className="ins-form">
            <div className="ins-field">
              <label className="ins-label" htmlFor="account">Account / MedRec #</label>
              <input
                id="account"
                type="text"
                className="ins-input"
                placeholder="Enter your account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="ins-field">
              <label className="ins-label" htmlFor="ssn">Last 4 digits of SSN</label>
              <input
                id="ssn"
                type="text"
                inputMode="numeric"
                maxLength={4}
                className="ins-input"
                placeholder="For eg: 1234"
                value={ssnLast4}
                onChange={(e) => setSsnLast4(e.target.value.replace(/\D/g, ''))}
                autoComplete="off"
              />
            </div>
            <button type="submit" className="ins-btn ins-btn-primary">
              Verify
            </button>
            <a href="#other" className="ins-link">Other Verification Options</a>
            <p className="ins-disclaimer">
              By clicking on Verify, you accept the <a href="#terms">Terms and Conditions</a>.
            </p>
          </form>
        </section>
      </main>

      <footer className="ins-footer">
        <h3 className="ins-footer-title">Your security. Our priority.</h3>
        <div className="ins-badges">
          <div className="ins-badge">
            <span className="ins-badge-icon ins-badge-icon-img" aria-hidden>
              <img src={pciSvg} alt="" width={32} height={32} />
            </span>
            <span className="ins-badge-text"><strong>PCI DSS</strong><br />COMPLIANT</span>
          </div>
          <div className="ins-badge">
            <span className="ins-badge-icon ins-badge-icon-img" aria-hidden>
              <img src={secureSvg} alt="" width={32} height={32} />
            </span>
            <span className="ins-badge-text"><strong>SECURE</strong><br />SSL ENCRYPTION</span>
          </div>
        </div>
        <p className="ins-credit">Portal developed and managed by Skit.ai</p>
      </footer>
    </>
  );
}

function LoadingScreen() {
  return (
    <>
      <header className="ins-header ins-header-home ins-header-login">
        <div className="ins-header-logo-wrap">
          <img src={logoImg} alt="Global Finance" className="ins-logo-img" />
        </div>
        <button type="button" className="ins-header-phone" aria-label="Call">
          <img src={phoneSvg} alt="" className="ins-header-icon-img" width={32} height={32} />
        </button>
      </header>

      <main className="ins-loading-main">
        <div className="ins-spinner" aria-hidden />
        <p className="ins-loading-text">Fetching your details. Please wait...</p>
      </main>
    </>
  );
}

function OptionsScreen({ onUpdateInsurance, onUpdatePersonal, onNeedAssistance, onLogout }) {
  return (
    <>
      <header className="ins-header ins-header-options">
        <div className="ins-header-logo-wrap">
          <img src={logoImg} alt="Annuity Health" className="ins-logo-img" />
        </div>
        <button type="button" className="ins-btn-logout" onClick={onLogout}>
          Logout
        </button>
      </header>

      <main className="ins-options-main">
        <h1 className="ins-hero-title">Global Finance is here to help 🤝</h1>
        <div className="ins-options-list">
          <button type="button" className="ins-option-card ins-option-card-primary" onClick={onUpdateInsurance}>
            <span className="ins-option-icon" aria-hidden><ShieldIcon /></span>
            <div className="ins-option-content">
              <h2 className="ins-option-title">Update insurance details</h2>
              <p className="ins-option-sub">Update insurance name, policy number, insured name and more.</p>
            </div>
            <ChevronRightIcon />
          </button>
          <button type="button" className="ins-option-card" onClick={onUpdatePersonal}>
            <span className="ins-option-icon" aria-hidden><PersonIcon /></span>
            <div className="ins-option-content">
              <h2 className="ins-option-title">Update personal details</h2>
              <p className="ins-option-sub">Update mobile number, communication address, email and more.</p>
            </div>
            <ChevronRightIcon />
          </button>
          <button type="button" className="ins-option-card" onClick={onNeedAssistance}>
            <span className="ins-option-icon" aria-hidden><PhoneIcon /></span>
            <div className="ins-option-content">
              <h2 className="ins-option-title">Need assistance?</h2>
              <p className="ins-option-sub">Request a callback.</p>
            </div>
            <ChevronRightIcon />
          </button>
        </div>
      </main>

      <footer className="ins-footer ins-footer-minimal">
        <p className="ins-credit">Portal developed and managed by Skit.ai</p>
      </footer>
    </>
  );
}

const AGENCY_DETAILS = {
  phone: '+1 (800) 123-4567',
  email: 'support@annuityhealth.com',
  address: '123 Healthcare Plaza, Suite 100, Eastwood, USA',
  hours: 'Mon–Fri 9:00 AM – 5:00 PM, Sat 9:00 AM – 2:00 PM',
};

function NeedAssistanceScreen({ onBack }) {
  const [callbackNote, setCallbackNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <FormHeader title="Need assistance?" onBack={onBack} />
      <main className="ins-form-main ins-assistance-main">
        <div className="ins-assistance-card">
          <h2 className="ins-assistance-card-title">Request a call</h2>
          <p className="ins-assistance-card-sub">Leave your details and we&apos;ll call you during working hours.</p>
          {!submitted ? (
            <form onSubmit={handleRequestSubmit} className="ins-update-form">
              <div className="ins-field">
                <label className="ins-label" htmlFor="callback-note">Preferred time or message (optional)</label>
                <textarea
                  id="callback-note"
                  className="ins-input ins-input-textarea"
                  placeholder="e.g. Call after 2 PM"
                  value={callbackNote}
                  onChange={(e) => setCallbackNote(e.target.value)}
                  rows={3}
                />
              </div>
              <button type="submit" className="ins-btn ins-btn-primary">Request a call back</button>
            </form>
          ) : (
            <p className="ins-assistance-success">We&apos;ve received your request. Our team will call you soon.</p>
          )}
        </div>

        <div className="ins-assistance-card ins-assistance-contact">
          <h2 className="ins-assistance-card-title">Agency contact details</h2>
          <dl className="ins-assistance-dl">
            <div>
              <dt>Phone</dt>
              <dd><a href={`tel:${AGENCY_DETAILS.phone.replace(/\D/g, '')}`}>{AGENCY_DETAILS.phone}</a></dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${AGENCY_DETAILS.email}`}>{AGENCY_DETAILS.email}</a></dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>{AGENCY_DETAILS.address}</dd>
            </div>
            <div>
              <dt>Working hours</dt>
              <dd>{AGENCY_DETAILS.hours}</dd>
            </div>
          </dl>
        </div>
      </main>
    </>
  );
}

function FormHeader({ title, onBack }) {
  return (
    <header className="ins-header ins-header-form">
      <button type="button" className="ins-header-back" onClick={onBack} aria-label="Back">
        <BackIcon />
      </button>
      <h1 className="ins-header-title">{title}</h1>
      <button type="button" className="ins-header-phone" aria-label="Call">
        <PhoneIcon />
      </button>
    </header>
  );
}

function InsuranceDetailsScreen({ onBack, onUpdate }) {
  const [provider, setProvider] = useState('United health group');
  const [policyNumber, setPolicyNumber] = useState('12345667');
  const [planName, setPlanName] = useState('Ultima health');
  const [groupNumber, setGroupNumber] = useState('1233');
  const [groupName, setGroupName] = useState('1233');
  const [insuredName, setInsuredName] = useState('John Doe');
  const [insuredSsn, setInsuredSsn] = useState('123-45-6789');
  const [insuredDob, setInsuredDob] = useState('10-23-1990');
  const [relationship, setRelationship] = useState('Spouse');
  const [address, setAddress] = useState('456 Maple Street, Eastwood, USA');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate();
  };

  return (
    <>
      <FormHeader title="Insurance details" onBack={onBack} />
      <main className="ins-form-main">
        <form onSubmit={handleSubmit} className="ins-update-form">
          <div className="ins-field">
            <label className="ins-label ins-label-required" htmlFor="ins-provider">Insurance provider</label>
            <input id="ins-provider" type="text" className="ins-input" value={provider} onChange={(e) => setProvider(e.target.value)} />
          </div>
          <div className="ins-field">
            <label className="ins-label ins-label-required" htmlFor="ins-policy">Policy number</label>
            <input id="ins-policy" type="text" className="ins-input" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} />
          </div>
          <div className="ins-field">
            <label className="ins-label" htmlFor="ins-plan">Plan name</label>
            <input id="ins-plan" type="text" className="ins-input" value={planName} onChange={(e) => setPlanName(e.target.value)} />
          </div>
          <div className="ins-field">
            <label className="ins-label" htmlFor="ins-grp-num">Group number</label>
            <input id="ins-grp-num" type="text" className="ins-input" value={groupNumber} onChange={(e) => setGroupNumber(e.target.value)} />
          </div>
          <div className="ins-field">
            <label className="ins-label" htmlFor="ins-grp-name">Group name</label>
            <input id="ins-grp-name" type="text" className="ins-input" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
          </div>
          <div className="ins-field">
            <label className="ins-label ins-label-required" htmlFor="ins-insured-name">Insured name</label>
            <input id="ins-insured-name" type="text" className="ins-input" value={insuredName} onChange={(e) => setInsuredName(e.target.value)} />
          </div>
          <div className="ins-field">
            <label className="ins-label ins-label-required" htmlFor="ins-insured-ssn">Insured social security number</label>
            <input id="ins-insured-ssn" type="text" className="ins-input" value={insuredSsn} onChange={(e) => setInsuredSsn(e.target.value)} placeholder="000-00-0000" />
          </div>
          <div className="ins-field">
            <label className="ins-label ins-label-required" htmlFor="ins-insured-dob">Insured date of birth</label>
            <input id="ins-insured-dob" type="text" className="ins-input" value={insuredDob} onChange={(e) => setInsuredDob(e.target.value)} placeholder="MM-DD-YYYY" />
          </div>
          <div className="ins-field">
            <label className="ins-label" htmlFor="ins-relationship">Relationship</label>
            <input id="ins-relationship" type="text" className="ins-input" value={relationship} onChange={(e) => setRelationship(e.target.value)} />
          </div>
          <div className="ins-field">
            <label className="ins-label" htmlFor="ins-address">Address</label>
            <textarea id="ins-address" className="ins-input ins-input-textarea" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} />
          </div>
          <button type="submit" className="ins-btn ins-btn-primary">Update</button>
        </form>
      </main>
    </>
  );
}

function PersonalDetailsScreen({ onBack, onUpdate }) {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [ssn, setSsn] = useState('123-45-6789');
  const [dob, setDob] = useState('10-23-1990');
  const [address, setAddress] = useState('456 Maple Street, Eastwood, USA');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate();
  };

  return (
    <>
      <FormHeader title="Personal details" onBack={onBack} />
      <main className="ins-form-main">
        <form onSubmit={handleSubmit} className="ins-update-form">
          <div className="ins-field">
            <label className="ins-label ins-label-required" htmlFor="pers-first">First name</label>
            <input id="pers-first" type="text" className="ins-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="ins-field">
            <label className="ins-label ins-label-required" htmlFor="pers-last">Last name</label>
            <input id="pers-last" type="text" className="ins-input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="ins-field">
            <label className="ins-label" htmlFor="pers-phone">Phone number</label>
            <div className="ins-input-row">
              <span className="ins-input-prefix">+1</span>
              <input id="pers-phone" type="tel" className="ins-input" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          <div className="ins-field">
            <label className="ins-label" htmlFor="pers-email">Email id</label>
            <input id="pers-email" type="email" className="ins-input" placeholder="Enter work email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="ins-field">
            <label className="ins-label ins-label-required" htmlFor="pers-ssn">Social security number</label>
            <input id="pers-ssn" type="text" className="ins-input" value={ssn} onChange={(e) => setSsn(e.target.value)} placeholder="000-00-0000" />
          </div>
          <div className="ins-field">
            <label className="ins-label ins-label-required" htmlFor="pers-dob">Date of birth</label>
            <input id="pers-dob" type="text" className="ins-input" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="MM-DD-YYYY" />
          </div>
          <div className="ins-field">
            <label className="ins-label" htmlFor="pers-address">Address</label>
            <textarea id="pers-address" className="ins-input ins-input-textarea" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} />
          </div>
          <button type="submit" className="ins-btn ins-btn-primary">Update</button>
        </form>
      </main>
    </>
  );
}

function UpdateSuccessScreen({ onClose }) {
  return (
    <>
      <main className="ins-success-main">
        <div className="ins-success-icon" aria-hidden>
          <img src={doneImg} alt="" width={80} height={80} />
        </div>
        <h2 className="ins-success-title">Details updated successfully</h2>
        <p className="ins-success-sub">We&apos;ve also sent a confirmation email to your registered email address</p>
        <button type="button" className="ins-btn ins-btn-primary ins-btn-close" onClick={onClose}>Close</button>
      </main>
    </>
  );
}

export default function App() {
  const [screen, setScreen] = useState('verify'); // 'verify' | 'loading' | 'options' | 'insurance-details' | 'personal-details' | 'update-success'

  const goToLoading = () => {
    setScreen('loading');
    setTimeout(() => setScreen('options'), 2500);
  };

  return (
    <div className={`ins-portal ${screen === 'options' ? 'ins-portal-options' : ''} ${['insurance-details', 'personal-details', 'need-assistance', 'update-success'].includes(screen) ? 'ins-portal-gradient' : ''}`}>
      {screen === 'verify' && <VerifyScreen onVerify={goToLoading} />}
      {screen === 'loading' && <LoadingScreen />}
      {screen === 'options' && (
        <OptionsScreen
          onUpdateInsurance={() => setScreen('insurance-details')}
          onUpdatePersonal={() => setScreen('personal-details')}
          onNeedAssistance={() => setScreen('need-assistance')}
          onLogout={() => setScreen('verify')}
        />
      )}
      {screen === 'need-assistance' && (
        <NeedAssistanceScreen onBack={() => setScreen('options')} />
      )}
      {screen === 'insurance-details' && (
        <InsuranceDetailsScreen onBack={() => setScreen('options')} onUpdate={() => setScreen('update-success')} />
      )}
      {screen === 'personal-details' && (
        <PersonalDetailsScreen onBack={() => setScreen('options')} onUpdate={() => setScreen('update-success')} />
      )}
      {screen === 'update-success' && (
        <UpdateSuccessScreen onClose={() => setScreen('options')} />
      )}
    </div>
  );
}

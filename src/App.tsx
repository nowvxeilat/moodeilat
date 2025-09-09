import React from 'react';
import { useState } from 'react';
import { MapPin, Clock, ChefHat, Utensils, Wine, Star, Menu, X } from 'lucide-react';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { CookiePolicy } from './components/CookiePolicy';
import { Accessibility } from './components/Accessibility';
import { CookieConsent } from './components/CookieConsent';
import { AccessibilityIcon } from './components/AccessibilityIcon';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add structured data for better SEO
  React.useEffect(() => {
    // Set page title dynamically
    document.title = "MOOD - מסעדה כשרה חלבי באילת | מסעדות דגים כשרות באילת";
    
    // Add meta description if not present
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'MOOD - מסעדה כשרה חלבי באילת על גג מלון NOW עם נוף לים מרהיב. מסעדות דגים כשרות באילת, תפריט ערב עשיר, סושי כשר ברמה גבוהה, פסטה טרייה ומנות מהטאבון.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-white" dir="rtl" itemScope itemType="https://schema.org/Restaurant">
      {/* Hidden structured data for SEO */}
      <div style={{ display: 'none' }}>
        <h1 itemProp="name">MOOD - מסעדה כשרה חלבי באילת</h1>
        <p itemProp="description">מסעדת MOOD ממוקמת על גג מלון NOW באילת עם נוף לים מרהיב. מסעדות דגים כשרות באילת עם תפריט ערב עשיר.</p>
        <span itemProp="servesCuisine">כשר חלבי</span>
        <span itemProp="servesCuisine">דגים</span>
        <span itemProp="servesCuisine">סושי</span>
        <span itemProp="priceRange">$$-$$$</span>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">אילת</span>
          <span itemProp="addressCountry">IL</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-slate-900 text-white py-4 px-6 shadow-lg" role="navigation" aria-label="תפריט ניווט ראשי">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-yellow-400" itemProp="name">MOOD</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#menu" className="hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>תפריט</a>
            <a href="#hours" className="hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>שעות פתיחה</a>
            <a href="#location" className="hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>מיקום</a>
            <a href="#bar" className="hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>בר</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="תפריט ניווט"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
            <div className="flex flex-col space-y-3 pt-4">
              <a 
                href="#menu" 
                className="block px-4 py-2 hover:bg-slate-800 hover:text-yellow-400 transition-colors rounded-lg text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                תפריט הערב
              </a>
              <a 
                href="#hours" 
                className="block px-4 py-2 hover:bg-slate-800 hover:text-yellow-400 transition-colors rounded-lg text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                שעות פתיחה
              </a>
              <a 
                href="#location" 
                className="block px-4 py-2 hover:bg-slate-800 hover:text-yellow-400 transition-colors rounded-lg text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                מיקום המסעדה
              </a>
              <a 
                href="#bar" 
                className="block px-4 py-2 hover:bg-slate-800 hover:text-yellow-400 transition-colors rounded-lg text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                תפריט בר
              </a>
            </div>
          </div>
        )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6" role="banner">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-yellow-400">MOOD</h1>
          <h2 className="text-3xl mb-4" itemProp="description">מסעדת כשר חלבי</h2>
          <div className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto" itemProp="description">
            <p className="mb-4">
              ממוקמת על גג מלון NOW, צמוד לבריכת הגג, עם נוף לים מרהיב
            </p>
            <p className="text-lg">
              <a href="https://moodeilat.co.il/" className="text-yellow-300 hover:text-yellow-200 underline transition-colors" target="_blank" rel="noopener noreferrer">
                מסעדה באילת
              </a>
              {" "}המתמחה ב
              <a href="https://mood-eilat.com/" className="text-yellow-300 hover:text-yellow-200 underline transition-colors mx-2" target="_blank" rel="noopener noreferrer">
                מסעדות דגים כשרות באילת
              </a>
              ומציעה חוויית קולינרית ייחודית
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse">
              <ChefHat className="h-5 w-5 text-yellow-400" />
              <span>השף שלנו</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>סושי כשר ברמה גבוהה</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="py-16 px-6 bg-gray-50" role="region" aria-labelledby="hours-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="hours-heading" className="text-3xl font-bold mb-8 text-slate-900">שעות הגשה</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto" itemProp="openingHours" content="Su-Th 18:30-23:00">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-right">ימים א׳-ד׳</span>
                <span className="text-yellow-600 font-bold">18:30 - 23:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-right">יום ה׳</span>
                <span className="text-yellow-600 font-bold">18:30 - 24:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-right">יום ש׳</span>
                <span className="text-yellow-600 font-bold">20:30 - 00:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-6" role="region" aria-labelledby="menu-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="menu-heading" className="text-4xl font-bold text-center mb-12 text-slate-900">תפריט הערב</h2>
          
          {/* Appetizers */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-yellow-600 border-b-2 border-yellow-600 pb-2 text-right" role="heading" aria-level="3">ראשונות</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MenuItem name="סלט קיסר" price="64" description="חסות פריכות, שאלוט, קרוטונים, רוטב קיסר ופרמז'ן" />
              <MenuItem name="סלט ענבים" price="64" description="חצאי ענבים, צ'ילי, רוקט, עשבי תיבול, פקאן מסוכר ווינגרט" />
              <MenuItem name="סלט בוראטה" price="72" description="שרי, בצל ירוק, צנונית, פסטו, קרעי פוקאצ'ה וויניגרט רימונים" />
              <MenuItem name="סלק אפוי" price="58" description="דפי סלק אפוי על יוגורט עזים עם צנוברים, דבש ושמן זית" />
              <MenuItem name="כרוב צלוי" price="56" description="כרוב צלוי בטאבון, חמאת עשבים, יוגורט וצנוברים" />
              <MenuItem name="קרפצ'יו דג ים" price="72" description="קרפצ'יו דג ים, זרעי עגבניות, צ'ילי אדום, אורגנו טרי ושמן טרי" />
              <MenuItem name="סביצ'ה דג ים" price="74" description="דג קצוץ דק, שזיף מיובש, צ'ילי ועשבי תיבול, איולי אבוקדו וקרקר מטוגן" />
              <MenuItem name="טטאקי בחריימה" price="84" description="פרוסות של טונה אדומה חצי צרובה, חריימה ושמן צ'ילי" />
              <MenuItem name="נאמס" price="82" description="דף אורז מטוגן במילוי דגים, מוגש עם חסה, עשבי תיבול, צ'ילי ורוטב אסיאתי בצד" />
              <MenuItem name="סיגר דג ים פריך" price="86" description="סיגר דג ים, מוגש על רוטב יוגורט כוסברה ונענע" />
              <MenuItem name="קובנייה טונה אדומה" price="69" description="רימונים, קרמבל צנובר וראס אל חנות, קציפה של יוגורט" />
            </div>
          </div>

          {/* From Tabun */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-yellow-600 border-b-2 border-yellow-600 pb-2 text-right">מהטאבון</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MenuItem name="פוקאצ'ה חמה" price="32" description="פוקאצ'ה טרייה היוצאת מהטאבון, מוגשת עם מטבלים" />
              <MenuItem name="פיצה נפוליטנה" price="64" description="רוטב עגבניות סן מרזנו ובזיליקום, מוצרלה ושמן זית" />
              <MenuItem name="פיצה ביאנקה" price="69" description="רוטב בשמל, תפוחי אדמה מדורה, מוצרלה, פרמז'ן ובצל ירוק" />
            </div>
          </div>

          {/* Fresh Pasta */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-yellow-600 border-b-2 border-yellow-600 pb-2 text-right">פסטה טרייה</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <MenuItem name='"אנטולי" תירס' price="98" description="אנילוטי במילוי תירס גילי, רוטב שמנת וויסקי ואגוזי לוז, פטריות יער, שמן בזיליקום ושמן כמהין שחור" />
              <MenuItem name="טורטליני ארטישוק (6 יח')" price="73" description="טורטליני במילוי ארטישוק, חמאת אורגנו וסומק" />
              <MenuItem name="לינגוויני דג לבן" price="98" description="לינגוויני עם קרם שעועית לימה, קוביות דג לבן מפורק, שמן בזיל" />
              <MenuItem name="לינגוויני שמנת עשבי תיבול" price="69" description="פסטה לינגוויני, שמנת עשבי תיבול, פרמז'ן" />
            </div>
          </div>

          {/* Kosher Sushi */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-yellow-600 border-b-2 border-yellow-600 pb-2 text-right">סושי כשר</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MenuItem name="ספייסי מגורו" price="78" description="ספייסי טונה, מלפפון וקנפיו, איולי פיקנטי וטריאקי. על טופינג של טונה" />
              <MenuItem name="סלמון גריל" price="70" description="סלמון אפוי במרינדה עם בצל ירוק, אבוקדו, איולי חריף ושקדים קלויים, על טופינג של סלמון צרוב" />
              <MenuItem name="סלמון קינג" price="72" description="סלמון נא עם עירית ואבוקדו, טופינג סלמון" />
              <MenuItem name="קריספי זוקיני" price="58" description="זוקיני בטמפורה עם אבוקדו, עירית, קנפיו, סלנובה, איולי נענע, יוזו וטריאקי" />
              <MenuItem name="סביצ'ה רול" price="74" description="דג לבן בטמפורה, מיני סביצ'ה של דג ים קצוץ בתיבול ים תיכוני מעל" />
              <MenuItem name="ספיישל מוד" price="82" description="דג ים משתנה, אבוקדו, קנפיו, טופינג של סלמון, טונה ודג לבן, איולי יוזו, בצל ירוק ופוריקקה" />
              <MenuItem name="סשימי טונה" price="54" description="" />
              <MenuItem name="סשימי דג לבן" price="52" description="" />
              <MenuItem name="סשימי סלמון" price="48" description="" />
            </div>
          </div>

          {/* Specials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-yellow-600 border-b-2 border-yellow-600 pb-2 text-right">מיוחדים</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <MenuItem name="קריספי רייס" price="72" description="טרטר טונה חרפרף על ריבועי אורז צרובים (4 יח')" />
              <MenuItem name="סלמון טרטופו" price="55" description="ניגירי סלמון צרוב באש גלויה, חמאת כמהין וטריאקי (3 יח')" />
            </div>
          </div>

          {/* Main Courses */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-yellow-600 border-b-2 border-yellow-600 pb-2 text-right">עיקריות כשרות</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <MenuItem name="קבב דג ים" price="94" description="קבב דג, חמאת עגבניות, יוגורט צ'רמלה ולחם חם" />
              <MenuItem name="פילה סלמון" price="111" description="פילה סלמון, קרם אפונה וקולורבי צלוי" />
              <MenuItem name="לינגוויני ולברק" price="108" description="פסטה לינגוויני, שמנת עשבי תיבול, פילה לברק" />
              <MenuItem name="ריזוטו עגבניות ודניס" price="122" description="ריזוטו עגבניות עם פילה דניס" />
              <MenuItem name="דג שלם" price="299" description="דג שלם בטאבון לצד ירקות צלויים" highlight={true} />
            </div>
          </div>

          {/* Desserts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-yellow-600 border-b-2 border-yellow-600 pb-2 text-right">קינוחים כשרים</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MenuItem name="גבינה באסקית" price="52" description="מכוסה בקציפה של שמנת חמוצה, וניל וסוכר" />
              <MenuItem name="טירמיסו" price="55" description="ביסקוויט שקדים בהכנה עצמית, טבול בקפה עם שכבות קרם מסקרפונה, עיטור של קקאו, קראמבל עוגיות ואבקת קקאו" />
              <MenuItem name="ברולה דובאי" price="55" description="ברולה טחינה גולמית, צרוב לקרמול ומכוסה בשערות קדאיף ופיסטוקים מסוכרים" />
              <MenuItem name="פבלובה" price="52" description="קרם שאנטי על בסיס מסקרפונה, שברי מרנג, קרעי אננס מיובש ורוטב פסיפלורה כשר" />
            </div>
          </div>
        </div>
      </section>

      {/* Bar Section */}
      <section id="bar" className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">תפריט בר</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <Wine className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">יינות ושמפניות</h3>
              <p className="text-gray-300">מיטב היינות הישראלים, לצד מבחר שמפניות ויינות תוססים מאיטליה</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl">
              <Utensils className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">קוקטיילים מיוחדים - 68 ₪</h3>
              <div className="text-gray-300 space-y-2">
                <p className="text-right">• ספייסיפלורה</p>
                <p className="text-right">• Now is now</p>
                <p className="text-right">• פאשן פור מנגו</p>
                <p className="text-right">• בזיל סמאש</p>
                <p className="text-right">• ויסקי מיול</p>
                <p className="text-right">• Fresh And Sour</p>
                <p className="text-right">• Arak Berry</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-sm text-yellow-200 bg-slate-800 p-4 rounded-lg text-right">
            <strong>אזהרה:</strong> צריכה מופרזת של אלכוהול מסכנת חיים ומזיקה לבריאות
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 px-6 bg-gray-50" role="region" aria-labelledby="location-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="location-heading" className="text-3xl font-bold mb-8 text-slate-900">מיקום</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <div className="mb-6">
              <p className="text-gray-600 mb-2">
                אחת מ
                <a href="https://moodeilat.co.il/" className="text-yellow-600 hover:text-yellow-700 underline mx-1" target="_blank" rel="noopener noreferrer">
                  מסעדות כשרות באילת
                </a>
                המובילות
              </p>
            </div>
            <MapPin className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center">מלון NOW</h3>
            <p className="text-gray-600 mb-4 text-center" itemProp="streetAddress">גג המלון, צמוד לבריכת הגג</p>
            <span itemProp="addressLocality" style={{ display: 'none' }}>אילת</span>
            <span itemProp="addressCountry" style={{ display: 'none' }}>IL</span>
            <p className="text-lg font-semibold text-yellow-600 text-center">נוף לים מרהיב</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6" role="contentinfo">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">MOOD</h3>
          <p className="mb-4 text-center">
            <a href="https://mood-eilat.com/" className="text-yellow-300 hover:text-yellow-200 underline transition-colors" target="_blank" rel="noopener noreferrer">
              מסעדות דגים כשרות באילת
            </a>
            {" "}• מסעדת כשר חלבי • השף שלנו
          </p>
          <p className="text-gray-400 text-center">
            <a href="https://moodeilat.co.il/" className="text-gray-300 hover:text-yellow-300 underline transition-colors" target="_blank" rel="noopener noreferrer">
              מסעדה באילת
            </a>
            {" "}עם טכניקות בישול חדשניות • טעמים מגוונים • סושי כשר ברמה גבוהה
          </p>
          
          {/* Footer Links */}
          <div className="border-t border-slate-700 pt-6 mt-6">
            <div className="flex justify-center space-x-8 space-x-reverse text-sm">
              <button 
                onClick={() => setShowPrivacy(true)}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                מדיניות פרטיות
              </button>
              <button 
                onClick={() => setShowCookies(true)}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                קוקיס
              </button>
              <button 
                onClick={() => setShowAccessibility(true)}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                נגישות
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* SEO Signature */}
      <div className="bg-slate-800 text-center py-3">
        <p className="text-gray-400 text-xs">
          קידום אתרים: 
          <a 
            href="https://eranfixer.co.il" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 mx-1 transition-colors"
          >
            ערן פיקסר - eranfixer.co.il
          </a>
        </p>
      </div>

      {/* Modal Components */}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      {showCookies && <CookiePolicy onClose={() => setShowCookies(false)} />}
      {showAccessibility && <Accessibility onClose={() => setShowAccessibility(false)} />}
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
      
      {/* Accessibility Icon */}
      <AccessibilityIcon onOpenAccessibility={() => setShowAccessibility(true)} />
    </div>
  );
}

// MenuItem Component
function MenuItem({ name, price, description, highlight = false }: { 
  name: string; 
  price: string; 
  description: string; 
  highlight?: boolean;
}) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${highlight ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-white' : 'border-gray-100'}`}>
      <div className="flex justify-between items-start mb-3" dir="rtl">
        <h4 className={`font-bold text-lg ${highlight ? 'text-yellow-700' : 'text-slate-900'}`}>
          {name}
        </h4>
        <span className={`font-bold text-xl ${highlight ? 'text-yellow-600' : 'text-yellow-600'}`}>
          ₪{price}
        </span>
      </div>
      {description && (
        <p className="text-gray-600 text-sm leading-relaxed text-right">{description}</p>
      )}
    </div>
  );
}

export default App;
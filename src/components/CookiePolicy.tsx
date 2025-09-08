import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CookiePolicyProps {
  onClose: () => void;
}

export function CookiePolicy({ onClose }: CookiePolicyProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">מדיניות קוקיס</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="סגור"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6 text-right">
          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">מה הם קוקיס?</h3>
            <p className="text-gray-700 leading-relaxed">
              קוקיס הם קבצי טקסט קטנים הנשמרים במחשב או במכשיר הנייד שלכם כאשר אתם מבקרים באתר שלנו. הם עוזרים לנו לשפר את חוויית הגלישה שלכם.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">סוגי הקוקיס שאנו משתמשים בהם</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">קוקיס חיוניים</h4>
                <p className="text-gray-700">
                  קוקיס הכרחיים לתפעול האתר, כמו שמירת העדפות שפה והגדרות נגישות.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">קוקיס ביצועים</h4>
                <p className="text-gray-700">
                  עוזרים לנו להבין כיצד המבקרים משתמשים באתר כדי לשפר את הביצועים.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">קוקיס פונקציונליים</h4>
                <p className="text-gray-700">
                  זוכרים את הבחירות שלכם (כמו העדפות תזונתיות) לשיפור החוויה.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">ניהול קוקיס</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              אתם יכולים לשלוט בקוקיס באמצעות:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>הגדרות הדפדפן שלכם</li>
              <li>מחיקת קוכיס קיימים</li>
              <li>חסימת קוכיס עתידיים</li>
              <li>קבלת התראות לפני שמירת קוכיס</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">השפעה על השירות</h3>
            <p className="text-gray-700 leading-relaxed">
              חסימת קוכיס מסוימים עשויה להשפיע על תפקוד האתר. קוכיס חיוניים נדרשים לתפעול בסיסי של האתר.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">קוכיס צד שלישי</h3>
            <p className="text-gray-700 leading-relaxed">
              האתר עשוי להשתמש בשירותי צד שלישי (כמו Google Analytics) שמשתמשים בקוכיס משלהם. אנו ממליצים לעיין במדיניות הפרטיות שלהם.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">עדכונים</h3>
            <p className="text-gray-700 leading-relaxed">
              מדיניות הקוכיס עשויה להתעדכן. שינויים יפורסמו באתר עם תאריך העדכון.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">מדיניות פרטיות</h2>
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
            <h3 className="text-xl font-bold mb-3 text-yellow-600">כללי</h3>
            <p className="text-gray-700 leading-relaxed">
              מסעדת MOOD מחויבת להגנה על פרטיותכם. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">איסוף מידע</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              אנו עשויים לאסוף את סוגי המידע הבאים:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>מידע ליצירת קשר (שם, טלפון, אימייל)</li>
              <li>פרטי הזמנות ועדיפויות תזונתיות</li>
              <li>מידע על ביקורים במסעדה</li>
              <li>משוב וחוות דעת</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">שימוש במידע</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              אנו משתמשים במידע שלכם עבור:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>עיבוד הזמנות ומתן שירות</li>
              <li>שיפור חוויית הלקוח</li>
              <li>יצירת קשר בנוגע להזמנות</li>
              <li>שליחת עדכונים על המסעדה (בהסכמתכם)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">הגנה על המידע</h3>
            <p className="text-gray-700 leading-relaxed">
              אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע האישי שלכם. המידע מאוחסן בשרתים מאובטחים ונגיש רק לצוות מורשה.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">זכויותיכם</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              יש לכם זכות:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>לדעת איזה מידע אנו מחזיקים עליכם</li>
              <li>לבקש עדכון או מחיקת המידע</li>
              <li>להסיר הסכמה לקבלת עדכונים</li>
              <li>להגיש תלונה לרשות הגנת הפרטיות</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">יצירת קשר</h3>
            <p className="text-gray-700 leading-relaxed">
              לשאלות בנוגע למדיניות הפרטיות, ניתן לפנות אלינו במסעדה או באמצעות האתר.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">עדכונים</h3>
            <p className="text-gray-700 leading-relaxed">
              מדיניות זו עשויה להתעדכן מעת לעת. עדכונים יפורסמו באתר המסעדה.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
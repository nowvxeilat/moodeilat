import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AccessibilityProps {
  onClose: () => void;
}

export function Accessibility({ onClose }: AccessibilityProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">הצהרת נגישות</h2>
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
            <h3 className="text-xl font-bold mb-3 text-yellow-600">מחויבותנו לנגישות</h3>
            <p className="text-gray-700 leading-relaxed">
              מסעדת MOOD מחויבת להנגשת השירותים שלה לכלל הציבור, כולל אנשים עם מוגבלויות. אנו פועלים ליצירת חוויה נגישה ושווה לכל המבקרים.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">נגישות האתר</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              האתר שלנו תוכנן בהתאם לתקן הנגישות הישראלי (תקן 5568) וכולל:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>ניווט באמצעות מקלדת</li>
              <li>תמיכה בקוראי מסך</li>
              <li>ניגודיות צבעים מתאימה</li>
              <li>טקסט ברור וקריא</li>
              <li>תמיכה בהגדלת גופנים</li>
              <li>תיאורים חלופיים לתמונות</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">נגישות המסעדה</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              המסעדה הפיזית כוללת:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>גישה נוחה למבקרים עם מוגבלויות ניידות</li>
              <li>שירותים נגישים</li>
              <li>תפריטים בכתב ברור</li>
              <li>צוות מיומן בשירות לקוחות עם צרכים מיוחדים</li>
              <li>התאמות תזונתיות לפי בקשה</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">שירותי נגישות נוספים</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              אנו מציעים:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>הזמנות טלפוניות עם הסבר מפורט על המנות</li>
              <li>סיוע בהזמנה ובחירת מנות</li>
              <li>התאמת מקומות ישיבה לפי צרכים</li>
              <li>מידע על אלרגנים ורכיבי מזון</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">שיפור מתמיד</h3>
            <p className="text-gray-700 leading-relaxed">
              אנו פועלים באופן מתמיד לשיפור הנגישות במסעדה ובאתר. אנו מקבלים בברכה הערות והצעות לשיפור.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">יצירת קשר לנושאי נגישות</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              לשאלות, הערות או בקשות הנוגעות לנגישות:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>ניתן לפנות אלינו טלפונית במסעדה</li>
              <li>לשלוח הודעה דרך האתר</li>
              <li>לפנות ישירות לצוות במהלך הביקור</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-yellow-600">תאריך עדכון</h3>
            <p className="text-gray-700 leading-relaxed">
              הצהרת נגישות זו עודכנה לאחרונה בינואר 2025 ונבדקת באופן שוטף.
            </p>
          </section>

          <section className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-yellow-600">רכז נגישות</h3>
            <p className="text-gray-700 leading-relaxed">
              לפניות דחופות בנושאי נגישות, ניתן לפנות לרכז הנגישות של המסעדה שיטפל בבקשתכם בהקדם האפשרי.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
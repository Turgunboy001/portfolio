import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import photo from "../assets/photo.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* NAVBAR */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg sm:text-xl">{t('navbar.title')}</h1>
          <div className="flex space-x-1 sm:space-x-2">
            <button onClick={() => i18n.changeLanguage('uz')} className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-200 rounded text-sm">UZ</button>
            <button onClick={() => i18n.changeLanguage('ru')} className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-200 rounded text-sm">RU</button>
            <button onClick={() => i18n.changeLanguage('en')} className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-200 rounded text-sm">EN</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
        {/* TEXT */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {t('hero.name')}
          </h2>

          <p>
            {t('hero.bio1')}
          </p>

          <p>
            {t('hero.bio2')}
          </p>

          <p>
            {t('hero.bio3')}
          </p>
        </div>

        {/* IMAGE */}
        <div className="bg-white p-4 shadow rounded-lg text-center">
          <img src={photo} alt="Professor" className="rounded-lg mb-4" />

          <p className="text-sm">{t('image.university')}</p>

          <p className="text-sm">{t('image.department')}</p>
        </div>
      </section>

      {/* NEWS */}
      <section className="max-w-6xl mx-auto px-4 pb-8 sm:pb-16">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{t('news.title')}</h3>

        <div className="space-y-3 text-sm">
          <p>
            <span className="text-gray-500">2026</span> – {t('news.item1')}
          </p>

          <p>
            <span className="text-gray-500">2023</span> – {t('news.item2')}
          </p>

          <p>
            <span className="text-gray-500">2022</span> – {t('news.item3')}
          </p>

          <p>
            <span className="text-gray-500">2026</span> – {t('news.item4')}
          </p>
        </div>
      </section>

      {/* ACADEMIC CAREER */}
      <section className="max-w-6xl mx-auto px-4 pb-8 sm:pb-16">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{t('career.title')}</h3>

        <div className="space-y-4">
          <p>
            {t('career.item1')}
          </p>

          <p>
            {t('career.item2')}
          </p>

          <p>
            {t('career.item3')}
          </p>

          <p>
            {t('career.item4')}
          </p>

          <p>
            {t('career.item5')}
          </p>

          <p>
            {t('career.item6')}
          </p>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="bg-white py-8 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{t('research.title')}</h3>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              {t('research.item1')}
            </li>

            <li>
              {t('research.item2')}
            </li>

            <li>
              {t('research.item3')}
            </li>

            <li>
              {t('research.item4')}
            </li>
          </ul>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{t('publications.title')}</h3>

        <ul className="space-y-3">
          <li>📘 {t('publications.book1')}</li>
          <li>📘 {t('publications.book2')}</li>
          <li>
            📘 {t('publications.book3')}
          </li>
          <li>📗 {t('publications.book4')}</li>
          <li>📗 {t('publications.book5')}</li>
        </ul>

        <p className="mt-6">
          {t('publications.note')}
        </p>
      </section>

      {/* AWARDS */}
      <section className="bg-gray-100 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{t('awards.title')}</h3>

          <ul className="space-y-3">
            <li>🏅 {t('awards.item1')}</li>
            <li>
              🏅 {t('awards.item2')}
            </li>
            <li>
              🏅 {t('awards.item3')}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;

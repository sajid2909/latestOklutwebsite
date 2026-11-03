import fs from 'fs'
import path from 'path'

const locales = {
  en: {
    topic: 'Topic:',
    published: 'Published:',
    readingTime: 'Reading Time:',
    author: 'Author:',
    authorName: 'Oklut Enterprise Architecture Studio',
    techArea: 'Technology Area',
    purpose: 'Purpose',
  },
  hi: {
    topic: 'विषय:',
    published: 'प्रकाशित:',
    readingTime: 'पढ़ने का समय:',
    author: 'लेखक:',
    authorName: 'ओक्लुट एंटरप्राइज आर्किटेक्चर स्टूडियो',
    techArea: 'प्रौद्योगिकी क्षेत्र',
    purpose: 'उद्देश्य',
  },
  te: {
    topic: 'విషయం:',
    published: 'ప్రచురించబడింది:',
    readingTime: 'చదివే సమయం:',
    author: 'రచయిత:',
    authorName: 'ఓక్లుట్ ఎంటర్‌ప్రైజ్ ఆర్కిటెక్చర్ స్టూడియో',
    techArea: 'టెక్నాలజీ ప్రాంతం',
    purpose: 'ఉద్దేశం',
  },
  es: {
    topic: 'Tema:',
    published: 'Publicado:',
    readingTime: 'Tiempo de lectura:',
    author: 'Autor:',
    authorName: 'Estudio de Arquitectura Empresarial Oklut',
    techArea: 'Área Tecnológica',
    purpose: 'Propósito',
  },
  fr: {
    topic: 'Sujet :',
    published: 'Publié :',
    readingTime: 'Temps de lecture :',
    author: 'Auteur :',
    authorName: "Studio d'architecture d'entreprise Oklut",
    techArea: 'Domaine technologique',
    purpose: 'Objectif',
  },
  ar: {
    topic: 'الموضوع:',
    published: 'تاريخ النشر:',
    readingTime: 'وقت القراءة:',
    author: 'المؤلف:',
    authorName: 'استوديو بنية المؤسسات في أوكلوت',
    techArea: 'مجال التكنولوجيا',
    purpose: 'الهدف',
  },
}

for (const [lang, obj] of Object.entries(locales)) {
  const filePath = path.resolve('src/i18n/locales', lang, 'translation.json')
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    data.perspectives = obj
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8')
    console.log('Added perspectives to', lang)
  }
}

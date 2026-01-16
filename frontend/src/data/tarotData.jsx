
import React, { useState } from 'react';
import { Sparkles, Moon, Star, Heart, Briefcase, Calendar } from 'lucide-react';

// ============================================
// DATA - tarotData.js
// ============================================
const tarotCards = [
  { id: 0, name: 'The Fool', mongolian: 'Тэнэг', meaning: 'Шинэ эхлэл, боломж, итгэл' },
  { id: 1, name: 'The Magician', mongolian: 'Илбэчин', meaning: 'Манифестаци, хүч чадал, шилжилт' },
  { id: 2, name: 'The High Priestess', mongolian: 'Тахилч эм', meaning: 'Зөн совин, нууц мэдлэг, дотоод мэдрэмж' },
  { id: 3, name: 'The Empress', mongolian: 'Хатан хаан', meaning: 'Үржил шим, бүтээлч байдал, байгаль' },
  { id: 4, name: 'The Emperor', mongolian: 'Эзэн хаан', meaning: 'Эрх мэдэл, бүтэц, удирдлага' },
  { id: 5, name: 'The Hierophant', mongolian: 'Лам', meaning: 'Уламжлал, сургамж, зөвлөгөө' },
  { id: 6, name: 'The Lovers', mongolian: 'Хайрлагчид', meaning: 'Хайр, харилцаа, сонголт' },
  { id: 7, name: 'The Chariot', mongolian: 'Тэрэг', meaning: 'Хяналт, амжилт, зорилго' },
  { id: 8, name: 'Strength', mongolian: 'Хүч', meaning: 'Хүч чадал, зоригт байдал, тэвчээр' },
  { id: 9, name: 'The Hermit', mongolian: 'Ганцаарчин', meaning: 'Дотогшоо харалт, мэргэн ухаан' },
  { id: 10, name: 'Wheel of Fortune', mongolian: 'Азын хүрд', meaning: 'Азын эргэлт, өөрчлөлт' },
  { id: 11, name: 'Justice', mongolian: 'Шударга ёс', meaning: 'Шударга ёс, үнэн, хариуцлага' },
  { id: 12, name: 'The Hanged Man', mongolian: 'Дүүжлэгдсэн', meaning: 'Өөр өнцгөөс харах' },
  { id: 13, name: 'Death', mongolian: 'Үхэл', meaning: 'Өөрчлөлт, төгсгөл, шинэчлэгдэх' },
  { id: 14, name: 'Temperance', mongolian: 'Даруу байдал', meaning: 'Тэнцвэр, зохицуулалт' },
  { id: 15, name: 'The Devil', mongolian: 'Чөтгөр', meaning: 'Хязгаарлалт, хараат байдал' },
  { id: 16, name: 'The Tower', mongolian: 'Цамхаг', meaning: 'Гэнэтийн өөрчлөлт, устгал' },
  { id: 17, name: 'The Star', mongolian: 'Од', meaning: 'Найдвар, урам зориг' },
  { id: 18, name: 'The Moon', mongolian: 'Сар', meaning: 'Сэтгэл санаа, айдас, төөрөгдөл' },
  { id: 19, name: 'The Sun', mongolian: 'Нар', meaning: 'Баяр баясгалан, амжилт' },
  { id: 20, name: 'Judgement', mongolian: 'Шүүлт', meaning: 'Дахин төрөлт, дуудлага' },
  { id: 21, name: 'The World', mongolian: 'Дэлхий', meaning: 'Дуусгал, бүрэн байдал, амжилт' }
];
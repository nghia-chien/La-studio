import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import {
  Phone,
  MapPin,
  Calendar as CalendarIcon,
  Send,
  CheckCircle2,
  MessageCircle,
  Clock,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import { Calendar as CalendarComponent } from './ui/calendar';
import { cn } from '../lib/utils';

const BOOKING_CONCEPTS = [
  'Chân Dung & Thời Thượng',
  'Nàng Thơ Trong Trẻo',
  'Nghệ Thuật & Quyến Rũ',
  'Kỷ Niệm & Cặp Đôi',
  'Thiết Kế Concept Riêng',
];

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concept: BOOKING_CONCEPTS[0],
    date: '',
    note: '',
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formatDateDisplay = (date?: Date) => {
    if (!date) return 'Chọn ngày dự kiến...';
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build Zalo message URL with pre-filled content
    const message = `Chào La Studio, mình tên là ${formData.name} (${formData.phone}). Mình muốn đặt lịch chụp concept: ${formData.concept}, dự kiến ngày: ${formData.date || 'Sắp xếp theo lịch studio'}. Ghi chú: ${formData.note || 'Không có'}`;
    const zaloLink = `${STUDIO_INFO.zaloUrl}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    // Open Zalo in new window for direct conversion
    window.open(zaloLink, '_blank');
  };

  return (
    <section id="dat-lich" className="py-24 sm:py-32 bg-[#FAF8F5] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-[#EAE2D8] shadow-sm overflow-hidden p-6 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Studio Information & Direct Contact */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#CF9297] block mb-2">
                Liên Hệ & Đặt Lịch
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#221F1F] leading-tight">
                Ghé Thăm Tiệm Ảnh Nhà La
              </h2>
              <p className="text-sm text-[#78706E] mt-3 leading-relaxed">
                Hãy để lại thông tin hoặc nhắn trực tiếp qua Zalo để La Studio chuẩn bị trang phục, bối cảnh hoa và xếp lịch chụp chu đáo nhất cho bạn.
              </p>
            </div>

            {/* Direct Contact List */}
            <div className="space-y-4 pt-2">
              <a
                href={STUDIO_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE2D8] hover:border-[#CF9297] hover:bg-[#FAEBED]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAEBED] text-[#CF9297] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-[#78706E] uppercase tracking-wider font-medium block">
                    Hotline & Zalo Tư Vấn
                  </span>
                  <span className="text-base font-semibold text-[#221F1F]">
                    {STUDIO_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={STUDIO_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE2D8] hover:border-[#CF9297] hover:bg-[#FAEBED]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAEBED] text-[#CF9297] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] text-[#78706E] uppercase tracking-wider font-medium block">
                    Fanpage Facebook
                  </span>
                  <span className="text-sm font-semibold text-[#221F1F]">
                    La Studio - Chụp ảnh nàng thơ
                  </span>
                </div>
              </a>

              <a
                href={STUDIO_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE2D8] hover:border-[#CF9297] hover:bg-[#FAEBED]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAEBED] text-[#CF9297] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-[#78706E] uppercase tracking-wider font-medium block">
                    Vị Trí Studio
                  </span>
                  <span className="text-sm font-semibold text-[#221F1F]">
                    La STUDIO - Tiệm Ảnh Nhà La (TP. Hồ Chí Minh)
                  </span>
                  <span className="text-[11px] text-[#CF9297] block underline mt-0.5">
                    Bấm để mở chỉ đường trên Google Maps
                  </span>
                </div>
              </a>

              <div className="flex items-center space-x-3 px-4 text-xs text-[#78706E]">
                <Clock className="w-4 h-4 text-[#CF9297]" />
                <span>Giờ làm việc: {STUDIO_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Booking Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#EAE2D8] text-left">
            <div className="mb-6">
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#221F1F] font-semibold">
                Đăng Ký Tư Vấn & Đặt Lịch
              </h3>
              <p className="text-xs text-[#78706E] mt-1">
                Điền thông tin bên dưới để studio liên hệ tư vấn trang phục & giữ lịch chụp cho bạn.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white border border-[#CF9297] text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FAEBED] text-[#CF9297] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-editorial text-2xl text-[#221F1F] font-semibold">
                  Cảm Ơn Bạn Đã Gửi Yêu Cầu!
                </h4>
                <p className="text-xs sm:text-sm text-[#78706E] max-w-md mx-auto">
                  La Studio đã ghi nhận thông tin và sẽ phản hồi qua Zalo ({formData.phone}) trong vòng 15 phút. Bạn cũng có thể nhắn tin trực tiếp để được ưu tiên lịch chụp sớm nhất.
                </p>
                <a
                  href={STUDIO_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#221F1F] text-white px-6 py-2.5 rounded-full text-xs font-medium hover:bg-black transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Mở Zalo Trò Chuyện Ngay</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#221F1F] uppercase tracking-wider mb-1.5">
                      Họ và Tên *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Linh Chi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white border border-[#EAE2D8] focus:outline-none focus:border-[#CF9297] text-sm text-[#221F1F] shadow-xs transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#221F1F] uppercase tracking-wider mb-1.5">
                      Số Điện Thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0931 419 538"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white border border-[#EAE2D8] focus:outline-none focus:border-[#CF9297] text-sm text-[#221F1F] shadow-xs transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Shadcn UI Dropdown Select for Concepts */}
                  <div>
                    <label className="block text-xs font-semibold text-[#221F1F] uppercase tracking-wider mb-1.5">
                      Concept Bạn Quan Tâm
                    </label>
                    <Select
                      value={formData.concept}
                      onValueChange={(val) => setFormData({ ...formData, concept: val })}
                    >
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="Chọn concept..." />
                      </SelectTrigger>
                      <SelectContent>
                        {BOOKING_CONCEPTS.map((conceptName) => (
                          <SelectItem key={conceptName} value={conceptName}>
                            {conceptName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Shadcn UI Popover + Calendar Date Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-[#221F1F] uppercase tracking-wider mb-1.5">
                      Ngày Dự Kiến Chụp
                    </label>
                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            'w-full flex h-12 items-center justify-between rounded-xl border border-[#EAE2D8] bg-white px-4 text-sm text-left transition-all shadow-xs cursor-pointer',
                            !selectedDate ? 'text-[#78706E]' : 'text-[#221F1F] font-medium',
                            'hover:border-[#CF9297] focus:outline-none focus:border-[#CF9297] focus:ring-1 focus:ring-[#CF9297]'
                          )}
                        >
                          <span>{formatDateDisplay(selectedDate)}</span>
                          <CalendarIcon className="w-4 h-4 text-[#78706E]" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 border border-[#EAE2D8] bg-white rounded-2xl shadow-xl" align="start">
                        <CalendarComponent
                          selected={selectedDate}
                          onSelect={(date) => {
                            setSelectedDate(date);
                            const d = String(date.getDate()).padStart(2, '0');
                            const m = String(date.getMonth() + 1).padStart(2, '0');
                            const y = date.getFullYear();
                            setFormData({ ...formData, date: `${d}/${m}/${y}` });
                            setCalendarOpen(false);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#221F1F] uppercase tracking-wider mb-1.5">
                    Ghi Chú Hoặc Mong Muốn Riêng
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ví dụ: Mình muốn chụp vào cuối tuần, cần hỗ trợ thêm làm tóc..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAE2D8] focus:outline-none focus:border-[#CF9297] text-sm text-[#221F1F] resize-none shadow-xs transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#221F1F] hover:bg-[#332E2D] text-white text-sm font-semibold tracking-wide shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Xác Nhận Đặt Lịch & Tư Vấn Zalo</span>
                </button>

                <p className="text-[11px] text-center text-[#78706E]">
                  Cam kết bảo mật thông tin cá nhân. La Studio sẽ liên hệ lại ngay!
                </p>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

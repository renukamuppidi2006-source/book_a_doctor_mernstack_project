import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  
  const { _id, name, specialization, available, ratings, consultationFee, profileImage } = doctor;

  return (
    <div
      onClick={() => navigate(`/book/${_id}`)}
      className="group bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl dark:hover:shadow-slate-900/30 transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Doctor Image Container */}
      <div className="relative h-56 bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img
          src={profileImage}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Availability Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm ${
              available
                ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}
            ></span>
            {available ? 'Available' : 'Unavailable'}
          </span>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-1">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">{specialization}</p>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-3.5 h-3.5 fill-amber-500" />
            <span className="text-xs font-bold">{ratings ? ratings.toFixed(1) : '4.5'}</span>
          </div>
        </div>

        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors line-clamp-1">
          {name}
        </h3>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border flex justify-between items-center">
          <div>
            <p className="text-[10px] text-slate-400 dark:text-dark-text-muted uppercase">Consultation Fee</p>
            <p className="text-sm font-extrabold text-slate-700 dark:text-slate-200">${consultationFee}</p>
          </div>
          <button className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors group-hover:underline">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;

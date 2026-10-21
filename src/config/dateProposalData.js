// src/config/dateProposalData.js

export const DATE_PROPOSAL_DATA = {
  // Landing Gift/Envelope
  landing: {
    badge: "A SPECIAL MOMENT FOR YOU ✨",
    title: "Mana, this one's just for you",
    subtitle: "Everything I've been meaning to tell you is right here...",
    buttonText: "Unwrap It 🎁"
  },

  // The Letter & Gallery Data
  letter: {
    recipient: "Oye Bayko… ❤️",
    dateStamp: "Dasara Memory • 2026",
    messageParagraphs: [
      "Kaal Dasaryacha san hota… gharat evdha chaan vaatavaran hota, sagli preparation chalu hoti, sagle sobat hote. Pan satat ekch vichar manala khaat hota—ki tu mazya sobat asavis.",
      "Jevha gadyanchi puja zali, mummy aani aji ne puja keli, tevha manat aala ki yaaar... tu pan ithe havi hotis. Ghari Devi chi puja chalu hoti, ratri purna family ekatra aali hoti... me saglyana sobat baghun khush pan hoto, pan manat kuthe tari tula yaa saglyan madhe shodhat hoto.",
      "Tu je kaal maza chehra observe kela te agdi barobar hota. Me thoda upset hoto, karan purna divasbhar maza man tula shodhat hot. Jevha tu bhetlis, tevha maza mood thoda light zala, normal pan zalo... pan to ek adhurepanna divasbhar hota.",
      "Mala mahitiye he asa sarkha tuzya javal hatta karna satat mage lagna tula nahi aavdat, tula tuza time ani space havay...",
      "Pan still… thoda vel deu shakshil ka? Ek chotishi date... maybe ek-don taas? Dusra kahi dokyat nahiye... just tuzya javal basaychay, shanta bajula zopaychay, tuzya mandi var doka thevun tu mazya dokyavarun hath firavtes na... te punha havay. Tyane maza man shanta hota, mala ek navi energy milte.",
      "Khup miss kartoy aapla to Me Time... 🤍"
    ],

    // Photo Gallery Memories (You can replace these image links with your actual photo URLs or imported assets)
    memories: [
      { id: 1, url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", caption: "Our quiet drives 🚗" },
      { id: 2, url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80", caption: "Endless conversations ☕" },
      { id: 3, url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80", caption: "My safe space ✨" },
      { id: 4, url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80", caption: "Forever my Bayko ❤️" }
    ],

    // Date Options
    dateRequest: {
      question: "Will you allow me to come over for a date, Mana?",
      subtext: "Let's grab a warm cup of chai, good day biscuits and steal a quiet hour together...",
      options: [
        { id: "today", label: "Today ☕" },
        { id: "tomorrow", label: "Tomorrow 🌙" },
        { id: "this_week", label: "This Week ✨" },
        { id: "next_week", label: "Next Week 🌿" }
      ]
    },

    success: {
      title: "It's Official! 🎉✨",
      message: "I can't wait to spend time with you, Mana. Let's make this date unforgettable. 💖",
    }
  }
};
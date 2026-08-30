const fs = require('fs');
const path = require('path');
const filepath = path.join(process.cwd(), 'src/app/(main)/profile/page.tsx');
let content = fs.readFileSync(filepath, 'utf8');

const replacement = \{isEditing ? (
          <div className=\\relative z-10 flex flex-col gap-6\\>
            <div className=\\flex items-center justify-between\\>
              <h2 className=\\text-2xl font-bold font-heading\\>Edit Profile</h2>
              <button onClick={() => setIsEditing(false)} className=\\text-white/50 hover:text-white transition-colors\\>
                <X size={20} />
              </button>
            </div>
            
            <div className=\\space-y-4 max-w-sm\\>
              <div>
                <label className=\\text-xs uppercase tracking-widest text-white/70 font-bold mb-2 block\\>Sailor Name</label>
                <Input value={editName} onChange={(e) => setEditName(e.target.value)} className=\\bg-white/10 border-white/20 text-white placeholder-white/30\\ />
              </div>
              
              <div>
                <label className=\\text-xs uppercase tracking-widest text-white/70 font-bold mb-2 block\\>Title</label>
                <div className=\\grid grid-cols-2 sm:grid-cols-3 gap-2\\>
                  {TITLES.map(t => (
                    <button 
                      key={t.name}
                      onClick={() => setEditTitle({ name: t.name, flag: t.flag })}
                      className={\\\lex flex-col items-center gap-1 p-2 rounded-xl border transition-all \\\\}
                    >
                      <span className=\\text-xl\\>{t.flag}</span>
                      <span className=\\text-[10px] font-bold uppercase tracking-wider\\>{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Button onClick={saveProfile} className=\\self-start mt-4 bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-3 rounded-full uppercase tracking-widest text-xs border-none\\>
              Save Changes
            </Button>
          </div>
        ) : (
          <div className=\\relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left\\>
            <Avatar 
              size=\\xl\\ 
              name={currentProfile.sailorName}
              color={currentProfile.avatarColor} 
              countryFlag={currentProfile.countryFlag} 
              className=\\ring-4 ring-white/20 shadow-xl\\
            />
            <div className=\\flex-1 mt-2\\>
              <div className=\\flex items-center justify-center sm:justify-start gap-3 mb-1\\>
                <h1 className=\\text-3xl font-heading font-bold\\>{currentProfile.sailorName}</h1>
                {!currentProfile.isAnonymous && (
                  <div className=\\flex items-center gap-1 bg-white/20 text-white px-2 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider\\>
                    <Shield size={12} fill=\\currentColor\\ />
                    Verified
                  </div>
                )}
              </div>
              <p className=\\text-white/80 flex items-center justify-center sm:justify-start gap-1.5 text-lg mb-4\\>
                <span>{currentProfile.countryFlag}</span> {currentProfile.country}
              </p>
              <p className=\\italic text-white/90 max-w-xl text-sm sm:text-base leading-relaxed\\>
                {currentProfile.bio || 'Sailing the digital seas in search of good conversation.'}
              </p>
            </div>
          </div>
        )}\;

const oldPartStart = content.indexOf('{isEditing ? (');
const oldPartEnd = content.indexOf('</motion.div>', oldPartStart);
const oldPart = content.substring(oldPartStart, oldPartEnd);

content = content.replace(oldPart, replacement + '\n      ');
fs.writeFileSync(filepath, content, 'utf8');


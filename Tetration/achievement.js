'use strict';
const Cancel=[]
,RowCancel=[]
,GetAchievementName = ()=>[
   [
      'The beginning'
      ,'16 seconds of waiting'
      ,'Cubic growth'
      ,'I want to buy max'
      ,'Where is my (0)(0)(0)(0)[2]'
      ,'This notation sucks'
      ,'What does the INCREMENT mean'
      ,'That is what INCREMENT means'
      ,'Multiplier is the main concept'
   ],[
      'Now I get it'
      ,'And there are more'
      ,'Is it the last one'
      ,'It seems far away'
      ,'It seems farther away'
      ,'What is the difference'
      ,"But why they're all base-2"
      ,'Skip'
      ,'Equality'
   ],[
      'So here is the base-3'
      ,'This unlocker also works'
      ,'2 < 3'
      ,'2 < 3 means the amounts'
      ,'My target is base-3'
      ,'Skip to base-3'
      ,'Base-3 also wants equality'
      ,'More bases'
      ,'Base-4 also wants equality'
   ]
]
,GetAchievementTooltip = ()=>[
   [
      'Buy a (0)[2].'
      ,'Buy a (0)(0)[2].'
      ,'Buy a (0)(0)(0)[2].'
      ,"Buy 4 (0)[2]'s at once.\nReward: (0)[2] is 5% stronger"
      ,"Have 4 (0)(0)(0)[2]'s without\nseeing (0)(0)(0)(0)[2].\nReward: (0)(0)(0)[2] is 5%\nstronger"
      ,'Display your number as "ee...e"\nwithout other symbol.'
      ,'Get multipliers of\n(0)[2] < (0)(0)[2] < (0)(0)(0)[2] < ...\nReward: zero-only base-2 BM\nare 2% stronger'
      ,'Get amounts of\n(0)[2] < (0)(0)[2] < (0)(0)(0)[2] < ...\nReward: zero-only base-2 BM\nare 5% stronger'
      ,'Have multiplier exceeding amount of\nevery zero-only base-2 BM over 2.\nReward: zero-only base-2 BM are\n10% stronger'
   ],[
      'Buy a (0)(0)(0)(0)[2].'
      ,'Buy a (0)(0)(0)(0)(0)(0)[2].'
      ,'Buy a (0)(0)(0)(0)(0)(0)(0)(0)[2].'
      ,'Have 16 different kinds of\nzero-only BM.\nReward: zero-only BM are\n1% stronger'
      ,'Unlock 16 times in total.\nReward: (0)(0)(0)(0)[2]\nis 5% stronger'
      ,'Boost (0)[2] by 65536× from unlocker.'
      ,'Buy a (0)(0)(0)(0)(0)(0)(0)[2]\nwithout seeing (0)(0)[3].\nReward: (0)(0)(0)(0)(0)(0)(0)[2]\nis 20% stronger'
      ,'Unlock with only (0)[2] and highest\nzero-only base-2 BM bought.\nReward: (0)(0)[2] is 10% stronger'
      ,'Get multipliers of all zero-only\nbase-2 BM (at least 4 of them)\nequal (1% margin).\nReward: zero-only base-2 BM\nare 70% stronger'
   ],[
      'Buy a (0)(0)[3].'
      ,'Buy a (0)(0)(0)(0)(0)[3].'
      ,'Make the least multiplier of\nzero-only base-3 BM larger\nthan any zero-only base-2 BM.\nReward: zero-only base-3 BM\nare 2% stronger'
      ,'Make the least amount of\nzero-only base-3 BM larger\nthan any zero-only base-2 BM.\nReward: zero-only base-3 BM\nare 5% stronger'
      ,'Unlock zero-only base-3 BM\nmore times than base-2.\nReward: zero-only base-3\nBM are 10% stronger'
      ,'Unlock zero-only base-3 BM\nwith only (0)[2] and highest\nzero-only base-3 BM bought.\nReward: (0)(0)[3] and\n(0)(0)(0)[3] are 20% stronger'
      ,'Get multipliers of all zero-only\nbase-2 and base-3 BM (at least\n7 of them) equal (1% margin).\nReward: multipliers when buying\nbase-3 BM increase by 0.1'
      ,'Buy a (0)(0)(0)[4].'
      ,'Get multipliers of all zero-only\nbase-2 and base-4 BM (at least\n7 of them) equal (1% margin).\nReward: Power up unlock\nmultipliers by ^1.02'
   ]
]
,Achievementwatch = ()=>{
   var len=v.Achievement.length;
   Row0watch();
   if(len<=1){
      if(v.BMSStage>=1){
         Vue.set(v.Achievement,1,0);
         Row1watch()
      }else
         RowCancel[0] = v.$watch(()=>LessEqualQ(16777216,v.MainNumber),x=>{
            if(!x) return;
            RowCancel[0]();
            Vue.set(v.Achievement,1,0);
            Row1watch()
         })
   }else Row1watch();
   if(len<=2){
      if(v.BMSStage>=2){
         Vue.set(v.Achievement,2,0);
         Row2watch()
      }else
         RowCancel[1] = v.$watch(()=>LessEqualQ(18446744073709551616,v.MainNumber),x=>{
            if(!x) return;
            RowCancel[1]();
            Vue.set(v.Achievement,2,0);
            Row2watch()
         })
   }else Row2watch();
}
,Row0watch = ()=>{
   var Achievement=v.Achievement;
   if(!(Achievement[0]&1))
      Cancel[0]=v.$watch(()=>v.BM0etcBought[0][0],x=>{
         if(!x) return;
         Cancel[0]();
         Vue.set(Achievement,0,Achievement[0]|1)
      })
   if(!(Achievement[0]&2))
      Cancel[1]=v.$watch(()=>v.BM0etcBought[0][1],x=>{
         if(!x) return;
         Cancel[1]();
         Vue.set(Achievement,0,Achievement[0]|2)
      })
   if(!(Achievement[0]&4))
      Cancel[2]=v.$watch(()=>v.BM0etcBought[0][2],x=>{
         if(!x) return;
         Cancel[2]();
         Vue.set(Achievement,0,Achievement[0]|4)
      })
   if(!(Achievement[0]&8))
      Cancel[3]=v.$watch(()=>v.BM0etcBought[0][0],(x,x0)=>{
         if(LessQ(3.999999999999,Minus(x,x0))){
            Cancel[3]();
            Vue.set(Achievement,0,Achievement[0]|8)
         }
      })
   if(!(Achievement[0]&16))
      Cancel[4]=v.$watch(()=>{
         var base2=v.BM0etc[0];
         return base2.length<=3&&LessQ(3.999999999999,base2[2])
      },x=>{
         if(!x) return;
         Cancel[4]();
         Vue.set(Achievement,0,Achievement[0]|16)
      })
   if(!(Achievement[0]&32))
      Cancel[5]=v.$watch(()=>{
         var str=show(v.MainNumber),len=str.length;
         return len>=3&&'e'.repeat(len)===str
      },x=>{
         if(!x) return;
         Cancel[5]();
         Vue.set(Achievement,0,Achievement[0]|32)
      })
   if(!(Achievement[0]&64))
      Cancel[6]=v.$watch(()=>{
         var base2=v.BM0etcMult[0],n=base2.length;
         if(n<3) return false;
         while(--n) if(!LessQ(base2[n-1],base2[n])) return false;
         return true
      },x=>{
         if(!x) return;
         Cancel[6]();
         Vue.set(Achievement,0,Achievement[0]|64)
      })
   if(!(Achievement[0]&128))
      Cancel[7]=v.$watch(()=>{
         var base2=v.BM0etc[0],n=base2.length;
         if(n<3) return false;
         while(--n) if(!LessQ(base2[n-1],base2[n])) return false;
         return true
      },x=>{
         if(!x) return;
         Cancel[7]();
         Vue.set(Achievement,0,Achievement[0]|128)
      })
   if(!(Achievement[0]&256))
      Cancel[8]=v.$watch(()=>{
         var amount=v.BM0etc[0],mult=v.BM0etcMult[0],n=amount.length;
         while(n--) if(!(LessQ(2.000000000001,amount[n])&&LessQ(amount[n],mult[n]))) return false;
         return true
      },x=>{
         if(!x) return;
         Cancel[8]();
         Vue.set(Achievement,0,Achievement[0]|256)
      })
}
,Row1watch = ()=>{
   var Achievement=v.Achievement;
   if(!(Achievement[1]&1))
      Cancel[9]=v.$watch(()=>v.BM0etcBought[0][3],x=>{
         if(!x) return;
         Cancel[9]();
         Vue.set(Achievement,1,Achievement[1]|1)
      })
   if(!(Achievement[1]&2))
      Cancel[10]=v.$watch(()=>v.BM0etcBought[0][5],x=>{
         if(!x) return;
         Cancel[10]();
         Vue.set(Achievement,1,Achievement[1]|2)
      })
   if(!(Achievement[1]&4))
      Cancel[11]=v.$watch(()=>v.BM0etcBought[0][7],x=>{
         if(!x) return;
         Cancel[11]();
         Vue.set(Achievement,1,Achievement[1]|4)
      })
   if(!(Achievement[1]&8))
      Cancel[12]=v.$watch(()=>{
         var amount=v.BM0etc,sum=0,n,n1=amount.length;
         while(n1--)
            for(n=amount[n1].length;n--;)
               if(amount[n1][n]) ++sum;
         return LessEqualQ(16,sum)
      },x=>{
         if(!x) return;
         Cancel[12]();
         Vue.set(Achievement,1,Achievement[1]|8)
      })
   if(!(Achievement[1]&16))
      Cancel[13]=v.$watch(()=>v.BM0etcUnlockTotal>=16,x=>{
         if(!x) return;
         Cancel[13]();
         Vue.set(Achievement,1,Achievement[1]|16)
      })
   if(!(Achievement[1]&32))
      Cancel[14]=v.$watch(()=>LessQ(65535.99999999,Power(v.BM0etcUnlockerEff[0],v.BM0etcLength[0]-3)),x=>{
         if(!x) return;
         Cancel[14]();
         Vue.set(Achievement,1,Achievement[1]|32)
      })
   if(!(Achievement[1]&64))
      Cancel[15]=v.$watch(()=>{
         var base3=v.BM0etc[1];
         return !(base3&&base3.length)&&v.BM0etcBought[0][6]
      },x=>{
         if(!x) return;
         Cancel[15]();
         Vue.set(Achievement,1,Achievement[1]|64)
      })
   if(!(Achievement[1]&128))
      Cancel[16]=v.$watch(()=>[v.BM0etcLength[0],v.BM0etcBought],(x,x0)=>{
         if(x[0]!=x0[0]+1) return;
         var BM0etcBought=x0[1],base2Bought=BM0etcBought[0],n=base2Bought.length-1,n1;
         while(--n) if(base2Bought[n]) return;
         for(n1=BM0etcBought.length;--n1;)
            for(n=BM0etcBought[n1].length;n--;)
               if(BM0etcBought[n1][n]) return;
         Cancel[16]();
         Vue.set(Achievement,1,Achievement[1]|128)
      })
   if(!(Achievement[1]&256))
      Cancel[17]=v.$watch(()=>{
         var base2Mult=v.BM0etcMult[0],n=base2Mult.length-1,min,max;
         if(n<3) return false;
         min=base2Mult[n];
         max=base2Mult[n];
         while(n--){
            min=Min(min,base2Mult[n]);
            max=Max(max,base2Mult[n])
         }
         return LessQ(Minus(Ln(max),Ln(min)),0.01)
      },x=>{
         if(!x) return;
         Cancel[17]();
         Vue.set(Achievement,1,Achievement[1]|256)
      })
}
,Row2watch = ()=>{
   var Achievement=v.Achievement;
   if(!(Achievement[2]&1))
      Cancel[18]=v.$watch(()=>v.BM0etcBought[1]&&v.BM0etcBought[1][0],x=>{
         if(!x) return;
         Cancel[18]();
         Vue.set(Achievement,2,Achievement[2]|1)
      })
   if(!(Achievement[2]&2))
      Cancel[19]=v.$watch(()=>v.BM0etcBought[1]&&v.BM0etcBought[1][3],x=>{
         if(!x) return;
         Cancel[19]();
         Vue.set(Achievement,2,Achievement[2]|2)
      })
   if(!(Achievement[2]&4))
      Cancel[20]=v.$watch(()=>{
         var mult=v.BM0etcMult[1],n,min;
         if(!mult) return false;
         n=mult.length-1;
         min=mult[n];
         while(n--) min=Min(min,mult[n]);
         mult=v.BM0etcMult[0];
         for(n=mult.length;n--;) if(LessEqualQ(min,mult[n])) return false;
         return true
      },x=>{
         if(!x) return;
         Cancel[20]();
         Vue.set(Achievement,2,Achievement[2]|4)
      })
   if(!(Achievement[2]&8))
      Cancel[21]=v.$watch(()=>{
         var amount=v.BM0etc[1],n,min;
         if(!amount) return false;
         n=amount.length-1;
         min=amount[n];
         while(n--) min=Min(min,amount[n]);
         amount=v.BM0etc[0];
         for(n=amount.length;n--;) if(LessEqualQ(min,amount[n])) return false;
         return true
      },x=>{
         if(!x) return;
         Cancel[21]();
         Vue.set(Achievement,2,Achievement[2]|8)
      })
   if(!(Achievement[2]&16))
      Cancel[22]=v.$watch(()=>v.Ach2r16[0]<v.Ach2r16[1],x=>{
         if(!x) return;
         Cancel[22]();
         Vue.set(Achievement,2,Achievement[2]|16)
      })
   if(!(Achievement[2]&32))
      Cancel[23]=v.$watch(()=>[v.BM0etcLength[1],v.BM0etcBought],(x,x0)=>{
         if(x[0]!=x0[0]+1) return;
         var BM0etcBought=x0[1],n,n1=BM0etcBought.length;
         while(--n1>1)
            for(n=BM0etcBought[n1].length;n--;)
               if(BM0etcBought[n1][n]) return;
         for(n=BM0etcBought[1].length-1;n--;)
            if(BM0etcBought[1][n]) return;
         for(n=BM0etcBought[0].length;--n;)
            if(BM0etcBought[0][n]) return;
         Cancel[23]();
         Vue.set(Achievement,2,Achievement[2]|32)
      })
   if(!(Achievement[2]&64))
      Cancel[24]=v.$watch(()=>{
         var mult=v.BM0etcMult[1],n,min,max;
         if(!mult||mult.length+v.BM0etcMult[0].length<7) return false;
         n=mult.length-1;
         min=mult[n];
         max=mult[n];
         while(n--){
            min=Min(min,mult[n]);
            max=Max(max,mult[n])
         }
         mult=v.BM0etcMult[0];
         for(n=mult.length;n--;){
            min=Min(min,mult[n]);
            max=Max(max,mult[n])
         }
         return LessQ(Minus(Ln(max),Ln(min)),0.01)
      },x=>{
         if(!x) return;
         Cancel[24]();
         Vue.set(Achievement,2,Achievement[2]|64)
      })
   if(!(Achievement[2]&128))
      Cancel[25]=v.$watch(()=>v.BM0etcBought[2]&&v.BM0etcBought[2][0],x=>{
         if(!x) return;
         Cancel[25]();
         Vue.set(Achievement,2,Achievement[2]|128)
      })
   if(!(Achievement[2]&256))
      Cancel[26]=v.$watch(()=>{
         var mult=v.BM0etcMult[2],n,min,max;
         if(!mult||mult.length+v.BM0etcMult[0].length<7) return false;
         n=mult.length-1;
         min=mult[n];
         max=mult[n];
         while(n--){
            min=Min(min,mult[n]);
            max=Max(max,mult[n])
         }
         mult=v.BM0etcMult[0];
         for(n=mult.length;n--;){
            min=Min(min,mult[n]);
            max=Max(max,mult[n])
         }
         return LessQ(Minus(Ln(max),Ln(min)),0.01)
      },x=>{
         if(!x) return;
         Cancel[26]();
         Vue.set(Achievement,2,Achievement[2]|256)
      })
}

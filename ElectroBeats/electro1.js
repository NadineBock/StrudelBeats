stack(
  s("bd*4"),                  
  n("0 [2 ~ 3]").scale("C1:minor").s("brown").lpf(300).gain(0.9),
  chord("Cm7 Abmaj7 Fm7 G7").s("sine").lpf(900).room(0.6).gain(0.7),
  vowel("a e i o u").speed(1.5).gain(0.5),
  s("[hh ~ hh ~]*2").gain(0.4)
).cpm(122/4).room(0.4)

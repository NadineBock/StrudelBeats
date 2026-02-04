stack(
  s("bd*2 [~ clap] [hh*8 ~ hh*4]").swing(0.08).gain(0.9),
  n("0 [3 ~ 2] [0 1]").scale("C1:major").s("sawtooth").lpf(250).adsr("0.3 0.4 0.3 0.2").gain(1.0),
  chord("<Cm7 Fm7 Gm7>").s("gm_electric_piano_1").room(0.3).delay(0.25).gain(0.8),
  note("~ d4 [bb4 g4] c5 f4").s("square").lpf("600 1200").vowel("o a").gain(0.7)
).cpm(90/4).room(0.4)

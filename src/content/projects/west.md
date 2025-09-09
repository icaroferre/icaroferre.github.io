
---
title: "WEST//"
excerpt: "West-coast style monophonic synthesizer for NI Reaktor"
images:
    - https://www.native-instruments.com/fileadmin/userlib/images/795904_7404.WEST13.jpg
front_image: https://www.native-instruments.com/fileadmin/userlib/images/795904_7404.WEST13.jpg
project_url: "https://www.native-instruments.com/en/reaktor-community/reaktor-user-library/entry/show/8123/"
year: 2014
---

WEST// is a west-coast style monophonic synthesizer.
Since there aren’t too many of this kind of synths available for Reaktor I decided to try to create something. WEST// was inspired by the sounds of the Buchla modules and the semi-modular workflow from the ARP 2600 synthesizer.

The workflow on it is a bit particular so here are a few tips to get started:
- The VCA 1 is linked to the Master output and it’s always controlled by the ADSR 1.
- The sliders available on the Complex Oscillator behave as offsets when there’s no Modulation selected. Once you select a modulation source, the sliders turn into attenuators for the incoming modulation signals.
- Shape 1 and 2 are a bipolar slider

I’ve also created some custom sliders with a particular color scheme (inspired by the Buchla Easel):
Gray Sliders - Control Voltage
Blue Sliders - Audio Signals
Yellow Sliders - Time-based controls
Green Sliders - Audio Modifiers
Orange Sliders - Sequencer

The Self-Influenced Random (SIR) module is a special S&H circuity that can take the CV output of the S&H to control the frequency of the clock oscillator used to trigger the S&H. The SIR CV output is available in almost all of the CV inputs spread throughout WEST// however I've also added gate outputs which can be used to trigger the 3 envelopes.

"If I have seen further than others, it is by standing upon the shoulders of giants."

WEST// uses a couple of previously programmed parts:
- Wave Multiplier by Sandy Small and Kim Boestrom
- Frequency Shifter by Sandy Small, Sean Costello, and Jesse Voccia.
- Spring Reverb by Boscomac
- Source of Uncertainty by ReaktorTips.com
- Low Pass Gate by arachnaut
- The Revenge of Bucket Boy by Colin Brown

Original presets created by Ícaro Ferre.


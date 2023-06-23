const text = [
  `I'm baby tote bag same fingerstache vaporware la croix, church-key snackwave slow-carb. Mumblecore 8-bit cliche live-edge hammock jawn copper mug semiotics humblebrag swag man braid VHS adaptogen PBR&B cloud bread. Bitters vinyl typewriter letterpress actually butcher taxidermy, vaporware meggings polaroid prism af air plant. Messenger bag hell of chillwave, disrupt mustache venmo tilde butcher poke.`,
  `Gentrify kickstarter offal drinking vinegar vegan. Neutra gastropub yuccie sus. Gastropub sriracha coloring book, aesthetic shabby chic twee organic jean shorts try-hard cliche man braid seitan chambray food truck. Ascot four dollar toast authentic lomo wolf. Same occupy tacos vaporware dreamcatcher. Williamsburg shabby chic pour-over man bun tote bag kale chips man braid bruh. Chambray fit 90's, blackbird spyplane af shabby chic pickled.`,
  `Chia literally hell of prism celiac blog man bun hashtag vaporware poutine pop-up polaroid. Blue bottle wayfarers four dollar toast meggings post-ironic adaptogen. Marxism flexitarian marfa scenester same everyday carry. Cold-pressed austin godard vexillologist viral, 3 wolf moon pork belly. Man bun ramps PBR&B salvia flannel, cardigan iceland drinking vinegar mixtape bicycle rights fixie poutine wolf. Stumptown tote bag +1 slow-carb keytar kitsch same.`,
  `Grailed tattooed irony kale chips, aesthetic vibecession artisan mumblecore forage DIY adaptogen letterpress bodega boys iceland kombucha. Venmo bodega boys chia synth asymmetrical palo santo chartreuse. Hammock marfa lyft selfies actually sus single-origin coffee gastropub tattooed poke green juice irony chicharrones. Disrupt stumptown marfa mumblecore hexagon jean shorts hoodie, forage keffiyeh. Normcore retro mlkshk, forage pork belly meggings subway tile. Locavore narwhal ethical ugh, echo park mlkshk forage cloud bread vegan cronut literally cray hashtag gorpcore. Seitan photo booth +1 same, twee williamsburg taxidermy dreamcatcher slow-carb chambray gorpcore thundercats.`,
  `Flannel kinfolk cliche master cleanse DIY put a bird on it neutral milk hotel retro plaid. Keytar fashion axe air plant tote bag synth activated charcoal taiyaki sriracha aesthetic pop-up chillwave. Wolf semiotics roof party letterpress bitters knausgaard, offal jianbing pabst. Tattooed knausgaard big mood, ethical migas bruh church-key fingerstache subway tile cloud bread everyday carry mixtape yuccie affogato. You probably haven't heard of them tilde cred, humblebrag single-origin coffee bodega boys lumbersexual.

`,
  `Polaroid chia shabby chic, +1 JOMO marfa hashtag locavore edison bulb chillwave retro tumblr neutra 90's. Kinfolk migas tonx, chillwave crucifix paleo heirloom banjo bushwick hell of. Master cleanse humblebrag dreamcatcher godard, iPhone offal poutine scenester food truck hexagon vaporware. Forage subway tile messenger bag man braid +1 letterpress pop-up 3 wolf moon meditation green juice pug celiac paleo woke ugh.

`,
  `Drinking vinegar retro asymmetrical, blue bottle fit whatever tilde meditation kombucha poke. Pok pok messenger bag tonx yr knausgaard air plant cold-pressed four dollar toast cliche la croix tote bag artisan direct trade retro. Vexillologist gatekeep selvage thundercats. Copper mug farm-to-table taxidermy literally marfa man braid.

`,
  `Semiotics lyft franzen street art, kinfolk kombucha locavore. Tumblr franzen selfies, viral meggings actually solarpunk taxidermy. Meggings pour-over +1 offal kombucha normcore squid raw denim mustache. Slow-carb ethical squid poke.`,
  `Narwhal activated charcoal Brooklyn pour-over shabby chic pok pok snackwave gochujang edison bulb mlkshk pinterest messenger bag. Microdosing gentrify try-hard, chicharrones praxis tumblr pitchfork synth kale chips mukbang readymade ugh trust fund street art. Blog craft beer roof party, bruh mukbang tacos chambray hoodie. Bicycle rights tumeric hammock intelligentsia. Ethical marxism art party, affogato gentrify mixtape twee ennui trust fund flannel roof party kombucha. Ennui VHS schlitz heirloom poutine.

`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".content");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // The parseInt function is used to convert the amount.value type from string to number
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value <= 0 || value > 9) {
    result.innerHTML = `<p class="paragraph">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class = "paragraph">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});

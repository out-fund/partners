import React from "react";

const SourcesSVG = (props: any) => {
  // console.log(props);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="270"
      height="144"
      fill="none"
    >
      <path
        fill={props.bg}
        d="M174.291 46.294a4.988 4.988 0 014.988-4.988h85.733A4.988 4.988 0 01270 46.294V96.8a4.988 4.988 0 01-4.988 4.988h-85.733a4.988 4.988 0 01-4.988-4.989V46.295z"
      ></path>
      <path
        fill={props.elements}
        fillRule="evenodd"
        d="M270 79.326v17.473a4.988 4.988 0 01-4.988 4.988h-33.938c2.519-12.683 18.669-22.465 38.216-22.465.237 0 .474.001.71.004z"
        clipRule="evenodd"
      ></path>
      <path
        fill={props.text}
        d="M183.943 67.99l.918 2.777h.036l.917-2.777h.703l-1.244 3.528h-.789l-1.242-3.528h.701zm3.011 3.528v-2.646h.624v2.646h-.624zm.313-3.021a.366.366 0 01-.255-.099.316.316 0 01-.106-.239c0-.094.035-.174.106-.24a.363.363 0 01.255-.1c.1 0 .185.034.255.1a.31.31 0 01.107.24.314.314 0 01-.107.24.36.36 0 01-.255.098zm.952 3.021v-2.646h.605v.441h.027a.659.659 0 01.653-.479 1.406 1.406 0 01.224.018v.573a.643.643 0 00-.126-.024 1.145 1.145 0 00-.163-.012.632.632 0 00-.307.074.541.541 0 00-.29.5v1.555h-.623zm3.387-2.646v.483h-1.521v-.483h1.521zm-1.146-.634h.624v2.484a.39.39 0 00.038.194.204.204 0 00.103.09c.043.015.09.023.141.023a.615.615 0 00.183-.024l.105.488a1.175 1.175 0 01-.367.062 1.016 1.016 0 01-.422-.071.655.655 0 01-.298-.245.733.733 0 01-.107-.413v-2.588zm3.354 2.168v-1.534h.624v2.646h-.605v-.47h-.028a.794.794 0 01-.294.364.86.86 0 01-.502.14.907.907 0 01-.46-.115.805.805 0 01-.31-.339 1.208 1.208 0 01-.112-.54v-1.686h.624v1.589c0 .167.046.3.138.4a.47.47 0 00.362.147c.091 0 .18-.022.267-.067a.541.541 0 00.211-.2.614.614 0 00.085-.335zm2.026 1.166c-.167 0-.318-.03-.453-.09a.74.74 0 01-.317-.269.785.785 0 01-.115-.437c0-.15.027-.273.082-.37a.65.65 0 01.226-.235 1.13 1.13 0 01.322-.132c.121-.031.246-.054.374-.068.155-.016.281-.03.377-.043a.561.561 0 00.211-.062.148.148 0 00.067-.132v-.01a.39.39 0 00-.116-.302c-.077-.071-.187-.107-.332-.107a.597.597 0 00-.364.1.498.498 0 00-.179.236l-.582-.083a.936.936 0 01.615-.647c.153-.056.322-.083.506-.083.128 0 .255.015.381.045s.242.079.346.148a.74.74 0 01.252.277.908.908 0 01.096.44v1.77h-.599v-.363h-.021a.762.762 0 01-.417.36 1.033 1.033 0 01-.36.057zm.162-.458a.68.68 0 00.326-.075.551.551 0 00.212-.2.514.514 0 00.076-.27v-.312a.3.3 0 01-.1.045 1.45 1.45 0 01-.155.036c-.058.01-.115.02-.171.028l-.146.02a1.084 1.084 0 00-.25.063.408.408 0 00-.174.12.292.292 0 00-.064.197c0 .114.042.201.126.26a.55.55 0 00.32.088zm2.486-3.124v3.528h-.623V67.99h.623zm2.999 3.58c-.264 0-.491-.058-.68-.174a1.157 1.157 0 01-.436-.48 1.59 1.59 0 01-.152-.71c0-.269.052-.506.155-.712a1.15 1.15 0 01.438-.482 1.26 1.26 0 01.672-.174c.214 0 .404.04.57.119a.979.979 0 01.398.332.983.983 0 01.169.5h-.596a.575.575 0 00-.173-.319.495.495 0 00-.36-.13.565.565 0 00-.336.104.664.664 0 00-.225.293 1.19 1.19 0 00-.08.458c0 .18.027.336.08.466a.667.667 0 00.222.297.566.566 0 00.339.104.503.503 0 00.431-.205.603.603 0 00.102-.243h.596a.978.978 0 01-.555.835c-.164.08-.357.121-.579.121zm2.407.002c-.168 0-.319-.03-.453-.09a.74.74 0 01-.317-.269.785.785 0 01-.115-.437c0-.15.027-.273.082-.37a.643.643 0 01.226-.235 1.13 1.13 0 01.322-.132c.121-.031.245-.054.374-.068.155-.016.281-.03.377-.043a.549.549 0 00.21-.062.147.147 0 00.068-.132v-.01a.39.39 0 00-.116-.302c-.077-.071-.188-.107-.332-.107a.597.597 0 00-.364.1.498.498 0 00-.179.236l-.582-.083a.936.936 0 01.615-.647 1.46 1.46 0 01.506-.083c.128 0 .255.015.381.045s.242.079.346.148a.74.74 0 01.252.277.908.908 0 01.096.44v1.77h-.599v-.363h-.021a.762.762 0 01-.417.36 1.033 1.033 0 01-.36.057zm.162-.458a.68.68 0 00.326-.075.551.551 0 00.212-.2.513.513 0 00.075-.27v-.312a.28.28 0 01-.1.045 1.396 1.396 0 01-.155.036 4.683 4.683 0 01-.317.049 1.075 1.075 0 00-.249.062.408.408 0 00-.174.12.292.292 0 00-.064.197c0 .114.042.201.126.26.083.058.19.088.32.088zm1.862.404v-2.646h.605v.441h.028a.659.659 0 01.653-.479 1.425 1.425 0 01.223.018v.573a1.159 1.159 0 00-.289-.036.632.632 0 00-.307.074.538.538 0 00-.211.202.565.565 0 00-.078.298v1.555h-.624zm2.797.047a1 1 0 01-.558-.16 1.09 1.09 0 01-.39-.465 1.74 1.74 0 01-.143-.741c0-.294.049-.542.145-.744a1.07 1.07 0 01.395-.46c.165-.105.349-.157.553-.157.155 0 .282.026.382.08.1.05.179.113.238.187.058.072.104.14.136.205h.026v-1.32h.625v3.528h-.613v-.416h-.038a1.055 1.055 0 01-.14.204.767.767 0 01-.618.259zm.174-.512a.537.537 0 00.337-.106.667.667 0 00.212-.302 1.26 1.26 0 00.073-.45c0-.17-.024-.32-.073-.446a.634.634 0 00-.21-.294.543.543 0 00-.339-.105.55.55 0 00-.348.108.657.657 0 00-.21.3 1.26 1.26 0 00-.071.437c0 .166.024.313.071.443.048.129.118.23.212.305.094.073.209.11.346.11zm3.89-1.078l.04-.698-.586.384-.21-.365.625-.314-.625-.313.21-.365.586.384-.04-.698h.419l-.038.698.586-.384.21.365-.627.314.627.313-.21.365-.586-.384.038.698h-.419zm2.634 0l.04-.698-.586.384-.21-.365.625-.314-.625-.313.21-.365.586.384-.04-.698h.419l-.038.698.586-.384.21.365-.627.314.627.313-.21.365-.586-.384.038.698h-.419zm2.634 0l.04-.698-.586.384-.21-.365.625-.314-.625-.313.21-.365.586.384-.04-.698h.419l-.038.698.586-.384.21.365-.627.314.627.313-.21.365-.586-.384.038.698h-.419zm2.634 0l.04-.698-.586.384-.21-.365.626-.314-.626-.313.21-.365.586.384-.04-.698h.419l-.038.698.586-.384.21.365-.627.314.627.313-.21.365-.586-.384.038.698h-.419zm3.044 1.543v-.461l1.225-1.201c.117-.118.214-.223.292-.315a1.13 1.13 0 00.176-.267.66.66 0 00.059-.276.525.525 0 00-.076-.286.505.505 0 00-.209-.186.668.668 0 00-.301-.065.62.62 0 00-.305.072.498.498 0 00-.203.201.649.649 0 00-.071.312h-.608c0-.224.051-.418.153-.584a1.04 1.04 0 01.422-.384c.181-.09.387-.136.621-.136.236 0 .444.044.623.133.179.088.318.21.417.363.1.154.15.33.15.527 0 .132-.025.262-.076.39-.05.127-.139.268-.267.423a6.774 6.774 0 01-.532.564l-.608.618v.024h1.536v.534h-2.418zm4.279.049c-.248 0-.469-.043-.662-.128a1.106 1.106 0 01-.454-.355.917.917 0 01-.178-.525h.648a.427.427 0 00.095.25.56.56 0 00.229.163c.095.04.202.059.32.059a.81.81 0 00.336-.066.549.549 0 00.229-.186.46.46 0 00.081-.273.478.478 0 00-.082-.283.557.557 0 00-.245-.191.957.957 0 00-.382-.07h-.312v-.492h.312c.122 0 .23-.021.322-.064a.514.514 0 00.218-.179.462.462 0 00.078-.27.458.458 0 00-.258-.434.76.76 0 00-.588-.004.543.543 0 00-.222.167.43.43 0 00-.09.255h-.615a.9.9 0 01.171-.52c.11-.15.257-.268.441-.352.184-.085.39-.127.618-.127.236 0 .44.044.614.133a.998.998 0 01.404.353.883.883 0 01.143.49.72.72 0 01-.175.5.825.825 0 01-.462.264v.028c.248.034.438.126.57.275.133.148.2.333.198.553a.888.888 0 01-.168.53 1.126 1.126 0 01-.462.366 1.61 1.61 0 01-.672.133zm1.83-.703v-.508l1.497-2.366h.424v.724h-.259l-1.007 1.597v.027h2.089v.526h-2.744zm1.683.654v-.81l.007-.227v-2.49h.603v3.527h-.61zm2.838.049c-.229 0-.435-.043-.616-.13a1.1 1.1 0 01-.433-.358.955.955 0 01-.169-.52h.621a.488.488 0 00.187.355c.114.09.251.136.41.136a.617.617 0 00.565-.326.694.694 0 00.083-.35.712.712 0 00-.084-.354.635.635 0 00-.236-.243.66.66 0 00-.345-.09.818.818 0 00-.312.059.643.643 0 00-.243.158l-.577-.094.185-1.82h2.046v.534h-1.518l-.101.936h.02a.733.733 0 01.278-.191.976.976 0 01.393-.078 1.08 1.08 0 01.968.565c.096.176.145.377.145.603 0 .233-.054.441-.162.624a1.147 1.147 0 01-.447.429 1.348 1.348 0 01-.658.155zM183.471 89.07h.782l1.047 2.556h.042l1.047-2.556h.782v3.528h-.613v-2.424h-.033l-.975 2.414h-.458l-.975-2.42h-.033v2.43h-.613V89.07zm4.756 4.52a1.275 1.275 0 01-.406-.065l.145-.486a.82.82 0 00.242.038.297.297 0 00.188-.067.478.478 0 00.14-.214l.053-.143-.959-2.701h.661l.61 1.998h.028l.611-1.998h.663l-1.059 2.966a1.19 1.19 0 01-.196.36.805.805 0 01-.3.231.999.999 0 01-.421.081zm4.766-.94a1.28 1.28 0 01-.681-.174 1.163 1.163 0 01-.436-.48 1.59 1.59 0 01-.151-.71c0-.27.051-.507.155-.712.103-.207.249-.368.437-.483.19-.116.414-.174.672-.174.215 0 .405.04.57.12a.966.966 0 01.567.831h-.596a.573.573 0 00-.172-.318.499.499 0 00-.36-.13.561.561 0 00-.336.104.66.66 0 00-.226.293c-.053.127-.079.28-.079.458 0 .18.026.335.079.465a.682.682 0 00.222.298.57.57 0 00.34.103.562.562 0 00.246-.051.488.488 0 00.184-.154.576.576 0 00.102-.242h.596c-.015.187-.07.353-.165.498a.98.98 0 01-.39.337 1.3 1.3 0 01-.578.12zm2.407.001a1.1 1.1 0 01-.453-.09.734.734 0 01-.317-.268.786.786 0 01-.116-.438c0-.149.028-.272.083-.37a.635.635 0 01.226-.234 1.12 1.12 0 01.322-.133c.12-.03.245-.053.374-.067.155-.016.28-.03.377-.043a.563.563 0 00.21-.062c.045-.029.067-.073.067-.133v-.01c0-.13-.038-.23-.115-.302-.077-.07-.188-.106-.333-.106a.593.593 0 00-.363.1.492.492 0 00-.179.236l-.583-.083a.928.928 0 01.228-.403.988.988 0 01.387-.245 1.49 1.49 0 01.507-.083c.127 0 .254.015.381.045.126.03.241.08.346.148.104.068.188.16.251.278a.897.897 0 01.097.439v1.771h-.6v-.364h-.02a.767.767 0 01-.417.36 1.04 1.04 0 01-.36.057zm.162-.458a.676.676 0 00.325-.074.544.544 0 00.288-.47v-.312a.3.3 0 01-.1.045 1.452 1.452 0 01-.155.036c-.058.01-.114.02-.171.027l-.146.021a1.097 1.097 0 00-.25.062.421.421 0 00-.174.12.297.297 0 00-.064.197c0 .115.042.202.126.26a.548.548 0 00.321.088zm1.862.405v-2.646h.605v.44h.027a.66.66 0 01.653-.478 1.448 1.448 0 01.224.017v.574a.643.643 0 00-.126-.024 1.145 1.145 0 00-.163-.012.632.632 0 00-.307.074.542.542 0 00-.289.5v1.555h-.624zm2.796.046a1 1 0 01-.558-.16 1.087 1.087 0 01-.389-.465 1.726 1.726 0 01-.143-.74c0-.295.048-.543.145-.745a1.018 1.018 0 01.947-.617.81.81 0 01.382.08c.1.051.18.114.238.188.059.072.104.14.136.204h.026v-1.32h.626v3.529h-.614v-.417h-.038a1.047 1.047 0 01-.139.205.767.767 0 01-.241.183.834.834 0 01-.378.075zm.174-.511a.54.54 0 00.338-.107.667.667 0 00.212-.301c.048-.129.072-.279.072-.45 0-.171-.024-.32-.072-.446a.634.634 0 00-.21-.295.544.544 0 00-.34-.105.55.55 0 00-.348.109.657.657 0 00-.21.3 1.26 1.26 0 00-.07.437c0 .165.023.313.07.443a.69.69 0 00.212.305c.094.073.21.11.346.11zm14.214.532c-.283 0-.527-.072-.73-.215a1.372 1.372 0 01-.467-.626c-.108-.273-.162-.602-.162-.987.001-.384.056-.712.164-.982a1.35 1.35 0 01.467-.62c.203-.142.446-.213.728-.213.283 0 .526.07.729.213.203.143.359.35.467.62.109.271.164.599.164.982 0 .386-.055.716-.164.99-.108.271-.264.48-.467.623a1.226 1.226 0 01-.729.215zm0-.539c.221 0 .395-.109.522-.326.129-.218.193-.539.193-.963 0-.28-.029-.515-.088-.706a.93.93 0 00-.248-.43.541.541 0 00-.379-.147c-.219 0-.392.109-.52.327-.127.217-.192.536-.193.956-.001.282.027.518.085.71a.944.944 0 00.248.434.546.546 0 00.38.145zm1.932.472v-.462l1.225-1.2c.117-.119.215-.224.293-.316.078-.092.136-.18.175-.267a.646.646 0 00.059-.275.503.503 0 00-.284-.472.676.676 0 00-.302-.066.623.623 0 00-.305.072.498.498 0 00-.203.202.649.649 0 00-.071.312h-.608a1.034 1.034 0 01.576-.968c.18-.091.387-.136.62-.136a1.4 1.4 0 01.624.132c.179.089.318.21.416.364.1.154.15.33.15.527 0 .132-.025.262-.075.39a1.68 1.68 0 01-.267.423 6.795 6.795 0 01-.533.563l-.608.619v.024h1.537v.534h-2.419zm4.46-3.694l-1.137 4.225h-.546l1.137-4.225H221zm1.658 3.742c-.249 0-.469-.042-.662-.127a1.11 1.11 0 01-.455-.355.923.923 0 01-.177-.526h.647a.434.434 0 00.095.25c.058.07.134.125.229.164a.84.84 0 00.321.058.817.817 0 00.336-.065.555.555 0 00.229-.186.46.46 0 00.081-.274.48.48 0 00-.083-.282.552.552 0 00-.245-.192.954.954 0 00-.382-.069h-.312v-.492h.312a.76.76 0 00.322-.064.523.523 0 00.219-.18.462.462 0 00.078-.27.471.471 0 00-.259-.434.756.756 0 00-.587-.004.553.553 0 00-.223.168.422.422 0 00-.089.255h-.615a.891.891 0 01.17-.52 1.11 1.11 0 01.441-.352c.184-.085.39-.127.619-.127.235 0 .44.044.613.132.175.088.31.205.405.353a.892.892 0 01.143.491.72.72 0 01-.176.5.825.825 0 01-.461.264v.027c.248.035.438.126.57.276a.791.791 0 01.198.553.882.882 0 01-.169.53 1.114 1.114 0 01-.462.366 1.61 1.61 0 01-.671.132zm3.197.02c-.283 0-.527-.073-.73-.216a1.372 1.372 0 01-.467-.626c-.108-.273-.162-.602-.162-.987.001-.384.056-.712.164-.982.109-.27.264-.477.467-.62.203-.142.446-.213.728-.213.283 0 .526.07.729.213.203.143.359.35.467.62.109.271.164.599.164.982 0 .386-.055.716-.164.99-.108.271-.264.48-.467.623a1.226 1.226 0 01-.729.215zm0-.54c.221 0 .395-.109.522-.326.129-.218.193-.539.193-.963 0-.28-.029-.515-.088-.706a.93.93 0 00-.248-.43.541.541 0 00-.379-.147c-.219 0-.392.109-.52.327-.127.217-.192.536-.193.956-.001.282.027.518.085.71a.944.944 0 00.248.434.546.546 0 00.38.145zM185.3 86.18h-.284a.598.598 0 00-.24-.372.646.646 0 00-.197-.097.782.782 0 00-.225-.032.72.72 0 00-.387.108.748.748 0 00-.274.318c-.068.14-.102.312-.102.516 0 .203.034.375.102.515.068.14.159.246.274.319a.72.72 0 00.387.108.766.766 0 00.225-.033.608.608 0 00.437-.469h.284a.932.932 0 01-.117.323.873.873 0 01-.495.393 1.053 1.053 0 01-.334.052.984.984 0 01-.535-.147 1.014 1.014 0 01-.369-.418 1.44 1.44 0 01-.134-.643c0-.248.045-.463.134-.643.09-.181.213-.32.369-.418a.984.984 0 01.535-.148c.119 0 .23.018.334.052a.907.907 0 01.495.393.922.922 0 01.117.323zm.943 1.658a.714.714 0 01-.304-.063.519.519 0 01-.217-.185.518.518 0 01-.081-.294c0-.101.02-.183.06-.246a.422.422 0 01.16-.15.832.832 0 01.22-.08 2.92 2.92 0 01.245-.043c.107-.014.194-.024.26-.031a.407.407 0 00.148-.038c.031-.018.047-.048.047-.092v-.01a.36.36 0 00-.093-.263c-.062-.063-.155-.094-.28-.094a.488.488 0 00-.304.085.508.508 0 00-.155.181l-.257-.092a.615.615 0 01.184-.25.685.685 0 01.252-.127c.092-.024.182-.036.271-.036.057 0 .122.007.196.02.074.013.145.04.214.082a.48.48 0 01.174.187.696.696 0 01.069.335v1.163h-.271v-.24h-.014a.535.535 0 01-.263.234.66.66 0 01-.261.047zm.041-.243a.533.533 0 00.271-.064.423.423 0 00.168-.163.42.42 0 00.058-.21v-.248c-.012.014-.037.026-.076.038-.038.01-.083.02-.133.029a6.23 6.23 0 01-.26.034 1.06 1.06 0 00-.198.045.346.346 0 00-.147.09.235.235 0 00-.055.164c0 .094.035.165.105.213.07.048.159.072.267.072zm1.262.202v-1.764h.262v.266h.019a.423.423 0 01.174-.212.514.514 0 01.285-.082 3.356 3.356 0 01.142.005v.275a.78.78 0 00-.165-.018.482.482 0 00-.23.054.4.4 0 00-.216.36v1.116h-.271zm1.816.037a.688.688 0 01-.653-.429 1.139 1.139 0 01-.096-.486c0-.185.032-.346.096-.482a.699.699 0 01.658-.427.55.55 0 01.272.057.47.47 0 01.154.129c.036.047.064.086.084.117h.023v-.868h.271v2.352h-.262v-.271h-.032c-.02.032-.049.072-.085.121a.512.512 0 01-.158.13.564.564 0 01-.272.056zm.037-.244c.109 0 .2-.028.276-.085a.532.532 0 00.171-.238.982.982 0 00.058-.352.96.96 0 00-.057-.346.453.453 0 00-.448-.316.455.455 0 00-.287.089.526.526 0 00-.171.237.935.935 0 00-.057.336c0 .125.019.24.058.342a.557.557 0 00.172.243.45.45 0 00.285.09zm2.252.207v-2.352h.285v1.047h1.254v-1.047h.285v2.352h-.285v-1.052h-1.254v1.052h-.285zm3.074.037a.769.769 0 01-.419-.114.765.765 0 01-.28-.318 1.071 1.071 0 01-.1-.478c0-.184.033-.344.1-.481a.764.764 0 01.28-.32.769.769 0 01.419-.113.77.77 0 01.418.113.76.76 0 01.28.32c.068.137.101.297.101.48s-.033.342-.101.479a.758.758 0 01-.28.318.763.763 0 01-.418.114zm0-.244a.466.466 0 00.299-.093.545.545 0 00.173-.245.926.926 0 00.056-.328.935.935 0 00-.056-.33.551.551 0 00-.173-.247.463.463 0 00-.299-.094.465.465 0 00-.299.094.56.56 0 00-.173.247.935.935 0 00-.056.33c0 .118.018.227.056.328a.552.552 0 00.173.245.468.468 0 00.299.093zm1.484-2.145v2.352h-.271v-2.352h.271zm1.163 2.389a.694.694 0 01-.39-.112.759.759 0 01-.264-.317 1.154 1.154 0 01-.095-.486c0-.185.032-.346.095-.482a.698.698 0 01.658-.427.55.55 0 01.273.057c.067.038.118.08.153.129.036.047.064.086.084.117h.023v-.868h.271v2.352h-.262v-.271h-.032c-.02.032-.048.072-.085.121a.495.495 0 01-.157.13.564.564 0 01-.272.056zm.037-.244c.108 0 .2-.028.275-.085a.532.532 0 00.171-.238.982.982 0 00.059-.352.938.938 0 00-.058-.346.502.502 0 00-.17-.232.45.45 0 00-.277-.084.46.46 0 00-.288.089.54.54 0 00-.171.237.957.957 0 00-.056.336c0 .125.019.24.057.342a.559.559 0 00.173.243c.076.06.171.09.285.09zm2.045.243a.83.83 0 01-.44-.112.762.762 0 01-.284-.317 1.093 1.093 0 01-.098-.475c0-.181.033-.34.098-.478a.787.787 0 01.278-.324.748.748 0 01.418-.117c.092 0 .183.015.273.046.089.03.171.08.244.149a.713.713 0 01.176.271c.044.112.065.251.065.416v.115h-1.359v-.235h1.084c0-.1-.02-.188-.06-.266a.449.449 0 00-.423-.253.486.486 0 00-.28.08.528.528 0 00-.18.207.609.609 0 00-.063.274v.156c0 .133.023.246.069.339a.49.49 0 00.194.21.564.564 0 00.288.071c.071 0 .136-.01.193-.03a.412.412 0 00.15-.092.42.42 0 00.098-.154l.262.074a.587.587 0 01-.139.234.682.682 0 01-.241.156.9.9 0 01-.323.055zm1.143-.036v-1.764h.262v.266h.018a.42.42 0 01.175-.212.513.513 0 01.284-.082 3.356 3.356 0 01.143.005v.275a.78.78 0 00-.166-.018.478.478 0 00-.229.054.399.399 0 00-.216.36v1.116h-.271zm12.679 0v-2.352h1.419v.252h-1.135v.795h1.062v.253h-1.062v.8h1.153v.252h-1.437zm2.098-1.764l.423.72.422-.72h.313l-.57.882.57.882h-.313l-.422-.685-.423.685h-.313l.561-.882-.561-.882h.313zm1.544 2.425v-2.425h.262v.28h.032c.02-.03.048-.07.083-.117a.481.481 0 01.154-.129.55.55 0 01.273-.057.699.699 0 01.658.427c.064.136.096.297.096.482 0 .187-.032.35-.096.486a.688.688 0 01-.653.428.564.564 0 01-.272-.056.512.512 0 01-.158-.13 2.073 2.073 0 01-.085-.121h-.023v.932h-.271zm.267-1.543c0 .133.019.25.058.352.039.101.096.18.171.238a.446.446 0 00.276.085c.113 0 .208-.03.284-.09a.549.549 0 00.172-.243.957.957 0 00.059-.342.935.935 0 00-.058-.336.511.511 0 00-.171-.237.452.452 0 00-.286-.089.453.453 0 00-.448.316.96.96 0 00-.057.346zm1.704.882v-1.764h.271v1.764h-.271zm.138-2.058a.194.194 0 01-.137-.054.175.175 0 01-.056-.13c0-.05.019-.094.056-.13a.194.194 0 01.137-.054c.053 0 .098.018.135.054a.17.17 0 01.058.13.17.17 0 01-.058.13.186.186 0 01-.135.054zm.63 2.058v-1.764h.261v.266h.019a.423.423 0 01.174-.212.518.518 0 01.285-.082 3.356 3.356 0 01.143.005v.275a.99.99 0 00-.166-.018.478.478 0 00-.229.054.399.399 0 00-.216.36v1.116h-.271zm1.431.661a.591.591 0 01-.197-.032l.069-.239a.516.516 0 00.174.019.212.212 0 00.135-.068.555.555 0 00.109-.194l.05-.138-.652-1.773h.294l.487 1.405h.018l.487-1.405h.294l-.749 2.021a.746.746 0 01-.125.226.468.468 0 01-.173.135.536.536 0 01-.221.043zm3.298-.661h-.726v-2.352h.758c.228 0 .424.047.586.14a.923.923 0 01.373.404c.087.175.13.384.13.627 0 .245-.044.456-.131.633a.93.93 0 01-.381.407c-.167.094-.37.14-.609.14zm-.441-.253h.423a.942.942 0 00.483-.112.694.694 0 00.286-.32c.063-.14.094-.304.094-.496 0-.19-.031-.353-.093-.49a.682.682 0 00-.278-.317.875.875 0 00-.46-.112h-.455v1.847zm2.522.294a.714.714 0 01-.304-.063.519.519 0 01-.217-.185.518.518 0 01-.081-.294c0-.101.02-.183.06-.246a.422.422 0 01.16-.15.832.832 0 01.22-.08 2.92 2.92 0 01.245-.043c.107-.014.194-.024.261-.031a.407.407 0 00.147-.038c.031-.018.047-.048.047-.092v-.01a.36.36 0 00-.093-.263c-.062-.063-.155-.094-.279-.094a.489.489 0 00-.305.085.508.508 0 00-.155.181l-.257-.092a.615.615 0 01.184-.25.685.685 0 01.252-.127c.092-.024.183-.036.271-.036.057 0 .122.007.196.02.074.013.146.04.214.082a.48.48 0 01.174.187.696.696 0 01.069.335v1.163h-.271v-.24h-.014a.535.535 0 01-.263.234.66.66 0 01-.261.047zm.042-.243a.538.538 0 00.271-.064.426.426 0 00.225-.373v-.248c-.012.014-.037.026-.076.038-.038.01-.083.02-.133.029a6.23 6.23 0 01-.26.034c-.07.01-.136.024-.197.045a.334.334 0 00-.147.09.23.23 0 00-.056.164c0 .094.035.165.105.213.07.048.16.072.268.072zm2.029-1.562v.23h-.915v-.23h.915zm-.648-.423h.271v1.681c0 .077.011.134.033.173a.171.171 0 00.088.076.347.347 0 00.113.018.493.493 0 00.12-.014l.055.244a.577.577 0 01-.202.032.54.54 0 01-.225-.05.445.445 0 01-.182-.15.436.436 0 01-.071-.255V85.61zm1.776 2.224a.83.83 0 01-.44-.113.753.753 0 01-.283-.317 1.079 1.079 0 01-.099-.475c0-.181.033-.34.099-.478a.778.778 0 01.277-.324.75.75 0 01.419-.117c.091 0 .182.015.272.046.089.03.171.08.244.149a.713.713 0 01.176.271c.044.112.066.251.066.416v.115h-1.36v-.235h1.084c0-.1-.02-.188-.06-.266a.449.449 0 00-.422-.253.49.49 0 00-.281.08.528.528 0 00-.18.207.609.609 0 00-.063.274v.156c0 .133.023.246.069.339a.49.49 0 00.194.21.567.567 0 00.288.071c.071 0 .136-.01.193-.03a.408.408 0 00.248-.246l.262.074a.587.587 0 01-.139.234.673.673 0 01-.241.156.896.896 0 01-.323.055z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M255.097 89.45c-.003.222.275.37.728.59.742.336 1.088.747 1.082 1.285-.009.982-.89 1.618-2.247 1.618-.577-.006-1.136-.125-1.437-.252l.183-1.061.166.077c.423.174.698.248 1.215.248.37 0 .766-.145.769-.461.003-.21-.166-.358-.668-.592-.491-.224-1.139-.603-1.133-1.283.006-.92.905-1.564 2.179-1.564.5 0 .902.104 1.159.198l-.174 1.026-.116-.053a2.362 2.362 0 00-.966-.183c-.503 0-.74.212-.74.408zm5.308-1.312h-.997c-.31 0-.544.086-.677.39l-1.916 4.344h1.354l.275-.71h1.65c.042.166.157.71.157.71h1.197l-1.043-4.734zm-1.588 3.057c.103-.275.506-1.327.506-1.327s.112-.278.174-.45l.086.408s.251 1.127.301 1.37h-1.067zm-6.404 1.674l.81-4.734h-1.289l-.807 4.734h1.286zm-3.823-2.298c-.429-1.094-1.458-2.004-3.016-2.383l.018-.097h2.001c.272.009.488.097.565.384l.432 2.096zm.786 2.292l2.034-4.725h-1.366l-1.265 3.229-.136-.488c-.248-.586-.955-1.428-1.786-1.96l1.156 3.944h1.363z"
        clipRule="evenodd"
      ></path>
      <path
        fill={props.elements}
        fillRule="evenodd"
        d="M212.608 41.306c-7.071 5.515-17.536 9.007-29.214 9.007a56.71 56.71 0 01-9.103-.727v-3.292a4.988 4.988 0 014.988-4.988h33.329z"
        clipRule="evenodd"
      ></path>
      <rect
        width="65.926"
        height="41.955"
        x="38.951"
        y="0.33"
        fill="#F2F6FA"
        stroke="#D4E1ED"
        strokeWidth="0.661"
        rx="6.279"
      ></rect>
      <path
        fill="#000"
        d="M48.197 13.054c-.24 0-.448-.042-.624-.127a1.187 1.187 0 01-.439-.375 1.749 1.749 0 01-.254-.598 3.721 3.721 0 01-.079-.809c0-.3.026-.567.08-.804.056-.24.14-.44.253-.602a1.14 1.14 0 01.439-.37 1.38 1.38 0 01.624-.133c.48 0 .832.168 1.057.503.226.334.339.803.339 1.406 0 .603-.113 1.072-.339 1.407-.225.334-.578.502-1.057.502zm0-.566a.648.648 0 00.312-.069.538.538 0 00.2-.206.916.916 0 00.112-.322c.024-.13.037-.275.037-.434v-.63c0-.316-.05-.567-.148-.75-.095-.183-.266-.275-.513-.275s-.42.092-.518.275c-.096.183-.143.434-.143.75v.635c0 .318.047.568.143.751.098.184.271.275.518.275zm1.98-.032h.836v-1.66h-.888v-.534h.888v-.444a.97.97 0 01.042-.296.616.616 0 01.38-.386.936.936 0 01.345-.058h.92v.534h-1.01v.65h1.01v.534h-1.01v1.66h.888v.534h-2.4v-.534zm3.171 0h.835v-1.66h-.888v-.534h.888v-.444a.94.94 0 01.043-.296.616.616 0 01.38-.386.936.936 0 01.344-.058h.92v.534h-1.01v.65h1.01v.534h-1.01v1.66h.889v.534h-2.401v-.534zm4.424.598c-.219 0-.413-.034-.582-.1a1.173 1.173 0 01-.428-.286 1.261 1.261 0 01-.26-.444 1.83 1.83 0 01-.09-.592c0-.223.03-.422.09-.598.064-.176.152-.326.265-.45a1.15 1.15 0 01.407-.285c.162-.067.344-.1.545-.1.197 0 .375.033.534.1.158.064.292.155.402.275.112.12.199.264.259.434.06.169.09.356.09.56v.222H57.09v.069c0 .197.061.358.184.481.124.12.297.18.519.18a.885.885 0 00.433-.1.958.958 0 00.307-.276l.386.386a1.195 1.195 0 01-.434.37c-.187.103-.424.154-.713.154zm-.048-2.358c-.19 0-.344.06-.46.18a.654.654 0 00-.175.475v.037h1.238v-.047c0-.198-.055-.354-.164-.47a.563.563 0 00-.439-.175zm1.965 1.76h.677v-1.66h-.677v-.534h1.353v.746h.043a1.51 1.51 0 01.1-.275.905.905 0 01.17-.238.8.8 0 01.253-.17.896.896 0 01.354-.063h.296v.635h-.56c-.204 0-.365.06-.481.18a.633.633 0 00-.175.46v.92h.947v.533h-2.3v-.534z"
      ></path>
      <rect
        width="50.606"
        height="5.327"
        x="46.611"
        y="19.976"
        fill="#D7E0EA"
        rx="2.663"
      ></rect>
      <rect
        width="50.606"
        height="5.327"
        x="46.611"
        y="30.63"
        fill="#D7E0EA"
        rx="2.663"
      ></rect>
      <rect
        width="65.926"
        height="41.955"
        x="0.33"
        y="50.936"
        fill="#F2F6FA"
        stroke="#D4E1ED"
        strokeWidth="0.661"
        rx="6.279"
      ></rect>
      <path
        fill="#000"
        d="M9.577 63.66c-.24 0-.448-.043-.624-.127a1.185 1.185 0 01-.44-.376 1.747 1.747 0 01-.253-.597 3.721 3.721 0 01-.08-.81c0-.299.027-.567.08-.803.056-.24.141-.44.254-.603a1.14 1.14 0 01.439-.37 1.38 1.38 0 01.624-.132c.479 0 .832.168 1.057.502.226.335.338.804.338 1.407s-.112 1.072-.338 1.406c-.226.335-.578.503-1.057.503zm0-.566a.647.647 0 00.312-.069.537.537 0 00.2-.206.913.913 0 00.111-.323c.025-.13.038-.275.038-.433v-.63c0-.317-.05-.567-.149-.75-.095-.184-.266-.275-.512-.275-.247 0-.42.091-.519.275-.095.183-.142.433-.142.75v.635c0 .317.047.568.142.75.1.184.272.276.519.276zm1.98-.032h.836v-1.66h-.889v-.534h.889v-.444a.97.97 0 01.042-.296.618.618 0 01.38-.386.937.937 0 01.345-.059h.92v.535h-1.01v.65h1.01v.534h-1.01v1.66h.888v.534h-2.4v-.534zm3.17 0h.836v-1.66h-.888v-.534h.888v-.444a.97.97 0 01.042-.296.617.617 0 01.38-.386.938.938 0 01.345-.059h.92v.535h-1.01v.65h1.01v.534h-1.01v1.66h.888v.534h-2.4v-.534zm4.424.598a1.59 1.59 0 01-.581-.1 1.173 1.173 0 01-.429-.286 1.264 1.264 0 01-.259-.444 1.833 1.833 0 01-.09-.593c0-.222.03-.42.09-.597a1.32 1.32 0 01.265-.45 1.15 1.15 0 01.407-.285c.162-.067.344-.1.545-.1.197 0 .375.033.534.1.158.063.292.155.401.275.113.12.2.264.26.433.06.17.09.356.09.56v.223h-1.915v.069a.65.65 0 00.185.48c.124.12.296.18.518.18.17 0 .314-.033.434-.1a.958.958 0 00.307-.275l.386.386a1.195 1.195 0 01-.434.37c-.187.102-.425.154-.714.154zm-.047-2.359c-.19 0-.344.06-.46.18a.654.654 0 00-.175.476v.037h1.237v-.047c0-.198-.054-.355-.163-.471a.563.563 0 00-.44-.175zm1.965 1.761h.676v-1.66h-.676v-.534h1.353v.745h.043c.024-.095.058-.186.1-.275a.906.906 0 01.17-.238.8.8 0 01.253-.169.896.896 0 01.354-.063h.296v.634h-.56c-.205 0-.365.06-.481.18a.633.633 0 00-.175.46v.92h.947v.534h-2.3v-.534z"
      ></path>
      <rect
        width="50.606"
        height="5.327"
        x="7.99"
        y="70.582"
        fill="#D7E0EA"
        rx="2.663"
      ></rect>
      <rect
        width="50.606"
        height="5.327"
        x="7.99"
        y="81.236"
        fill="#D7E0EA"
        rx="2.663"
      ></rect>
      <rect
        width="65.926"
        height="41.955"
        x="74.907"
        y="50.936"
        fill="#F2F6FA"
        stroke="#D4E1ED"
        strokeWidth="0.661"
        rx="6.279"
      ></rect>
      <path
        fill="#000"
        d="M84.154 63.66c-.24 0-.448-.043-.624-.127a1.186 1.186 0 01-.44-.376 1.747 1.747 0 01-.253-.597 3.726 3.726 0 01-.08-.81c0-.299.027-.567.08-.803.056-.24.141-.44.254-.603a1.14 1.14 0 01.439-.37 1.38 1.38 0 01.624-.132c.479 0 .832.168 1.057.502.226.335.338.804.338 1.407s-.112 1.072-.338 1.406c-.225.335-.578.503-1.057.503zm0-.566a.647.647 0 00.312-.069.537.537 0 00.2-.206.913.913 0 00.112-.323c.024-.13.037-.275.037-.433v-.63c0-.317-.05-.567-.148-.75-.096-.184-.267-.275-.513-.275-.247 0-.42.091-.519.275-.095.183-.142.433-.142.75v.635c0 .317.047.568.142.75.1.184.272.276.519.276zm1.98-.032h.836v-1.66h-.888v-.534h.888v-.444a.97.97 0 01.042-.296.618.618 0 01.38-.386.937.937 0 01.345-.059h.92v.535h-1.01v.65h1.01v.534h-1.01v1.66h.888v.534h-2.4v-.534zm3.17 0h.836v-1.66h-.888v-.534h.888v-.444a.94.94 0 01.043-.296.617.617 0 01.38-.386.938.938 0 01.344-.059h.92v.535h-1.01v.65h1.01v.534h-1.01v1.66h.888v.534h-2.4v-.534zm4.424.598a1.59 1.59 0 01-.581-.1 1.173 1.173 0 01-.429-.286 1.264 1.264 0 01-.259-.444 1.833 1.833 0 01-.09-.593c0-.222.03-.42.09-.597a1.32 1.32 0 01.265-.45 1.15 1.15 0 01.407-.285c.162-.067.344-.1.544-.1.198 0 .376.033.535.1.158.063.292.155.401.275.113.12.2.264.26.433.06.17.09.356.09.56v.223h-1.915v.069a.65.65 0 00.185.48c.124.12.296.18.519.18a.874.874 0 00.433-.1.958.958 0 00.307-.275l.386.386a1.195 1.195 0 01-.434.37c-.187.102-.425.154-.714.154zm-.047-2.359c-.19 0-.344.06-.46.18a.654.654 0 00-.175.476v.037h1.237v-.047c0-.198-.054-.355-.163-.471a.563.563 0 00-.44-.175zm1.965 1.761h.676v-1.66h-.676v-.534h1.353v.745h.043c.024-.095.058-.186.1-.275a.906.906 0 01.17-.238.8.8 0 01.253-.169.896.896 0 01.354-.063h.296v.634h-.56c-.205 0-.365.06-.481.18a.633.633 0 00-.175.46v.92h.947v.534h-2.3v-.534z"
      ></path>
      <rect
        width="50.606"
        height="5.327"
        x="82.567"
        y="70.582"
        fill="#D7E0EA"
        rx="2.663"
      ></rect>
      <rect
        width="50.606"
        height="5.327"
        x="82.567"
        y="81.236"
        fill="#D7E0EA"
        rx="2.663"
      ></rect>
      <rect
        width="65.926"
        height="41.955"
        x="0.33"
        y="101.542"
        fill="#F2F6FA"
        stroke="#D4E1ED"
        strokeWidth="0.661"
        rx="6.279"
      ></rect>
      <path
        fill="#000"
        d="M9.577 114.265c-.24 0-.448-.042-.624-.126a1.197 1.197 0 01-.44-.376 1.745 1.745 0 01-.253-.597 3.722 3.722 0 01-.08-.809c0-.3.027-.568.08-.804.056-.24.141-.441.254-.603.116-.162.262-.285.439-.37a1.38 1.38 0 01.624-.132c.479 0 .832.167 1.057.502.226.335.338.804.338 1.407 0 .602-.112 1.071-.338 1.406-.226.335-.578.502-1.057.502zm0-.565a.646.646 0 00.312-.069.536.536 0 00.2-.206.915.915 0 00.111-.323c.025-.13.038-.275.038-.433v-.63c0-.317-.05-.567-.149-.75-.095-.184-.266-.275-.512-.275-.247 0-.42.091-.519.275-.095.183-.142.433-.142.75v.635c0 .317.047.567.142.751.1.183.272.275.519.275zm1.98-.032h.836v-1.66h-.889v-.534h.889v-.444c0-.11.014-.208.042-.297a.627.627 0 01.38-.386.952.952 0 01.345-.058h.92v.534h-1.01v.651h1.01v.534h-1.01v1.66h.888v.534h-2.4v-.534zm3.17 0h.836v-1.66h-.888v-.534h.888v-.444c0-.11.014-.208.042-.297a.626.626 0 01.38-.386.953.953 0 01.345-.058h.92v.534h-1.01v.651h1.01v.534h-1.01v1.66h.888v.534h-2.4v-.534zm4.424.597c-.218 0-.412-.033-.581-.1a1.166 1.166 0 01-.429-.286 1.257 1.257 0 01-.259-.444 1.829 1.829 0 01-.09-.592c0-.222.03-.421.09-.597.064-.177.152-.326.265-.45.113-.123.248-.218.407-.285.162-.067.344-.101.545-.101.197 0 .375.034.534.101.158.063.292.155.401.275.113.12.2.264.26.433.06.169.09.356.09.561v.222h-1.915v.069c0 .197.062.357.185.481.124.12.296.179.518.179.17 0 .314-.033.434-.1a.962.962 0 00.307-.275l.386.386a1.188 1.188 0 01-.434.37c-.187.102-.425.153-.714.153zm-.047-2.358c-.19 0-.344.06-.46.18a.655.655 0 00-.175.476v.037h1.237v-.048c0-.197-.054-.354-.163-.47a.561.561 0 00-.44-.175zm1.965 1.761h.676v-1.66h-.676v-.534h1.353v.745h.043c.024-.095.058-.187.1-.275a.803.803 0 01.777-.47h.296v.634h-.56c-.205 0-.365.06-.481.18a.633.633 0 00-.175.46v.92h.947v.534h-2.3v-.534z"
      ></path>
      <rect
        width="50.606"
        height="5.327"
        x="7.99"
        y="121.188"
        fill="#D7E0EA"
        rx="2.663"
      ></rect>
      <rect
        width="50.606"
        height="5.327"
        x="7.99"
        y="131.841"
        fill="#D7E0EA"
        rx="2.663"
      ></rect>
      <rect
        width="65.926"
        height="41.955"
        x="74.907"
        y="101.542"
        fill="#F2F6FA"
        stroke="#D4E1ED"
        strokeWidth="0.661"
        rx="6.279"
      ></rect>
      <path
        fill="#000"
        d="M84.154 114.265c-.24 0-.448-.042-.624-.126a1.198 1.198 0 01-.44-.376 1.745 1.745 0 01-.253-.597 3.727 3.727 0 01-.08-.809c0-.3.027-.568.08-.804.056-.24.141-.441.254-.603.116-.162.263-.285.439-.37a1.38 1.38 0 01.624-.132c.479 0 .832.167 1.057.502.226.335.338.804.338 1.407 0 .602-.112 1.071-.338 1.406-.225.335-.578.502-1.057.502zm0-.565a.646.646 0 00.312-.069.535.535 0 00.2-.206.915.915 0 00.112-.323c.024-.13.037-.275.037-.433v-.63c0-.317-.05-.567-.148-.75-.096-.184-.267-.275-.513-.275-.247 0-.42.091-.519.275-.095.183-.142.433-.142.75v.635c0 .317.047.567.142.751.1.183.272.275.519.275zm1.98-.032h.836v-1.66h-.888v-.534h.888v-.444c0-.11.014-.208.042-.297a.627.627 0 01.38-.386.952.952 0 01.345-.058h.92v.534h-1.01v.651h1.01v.534h-1.01v1.66h.888v.534h-2.4v-.534zm3.17 0h.836v-1.66h-.888v-.534h.888v-.444c0-.11.014-.208.043-.297a.626.626 0 01.38-.386.953.953 0 01.344-.058h.92v.534h-1.01v.651h1.01v.534h-1.01v1.66h.888v.534h-2.4v-.534zm4.424.597c-.218 0-.412-.033-.581-.1a1.166 1.166 0 01-.429-.286 1.257 1.257 0 01-.259-.444 1.829 1.829 0 01-.09-.592c0-.222.03-.421.09-.597.064-.177.152-.326.265-.45.112-.123.248-.218.407-.285.162-.067.344-.101.544-.101.198 0 .376.034.535.101.158.063.292.155.401.275.113.12.2.264.26.433.06.169.09.356.09.561v.222h-1.915v.069c0 .197.062.357.185.481.124.12.296.179.519.179a.874.874 0 00.433-.1.962.962 0 00.307-.275l.386.386a1.188 1.188 0 01-.434.37c-.187.102-.425.153-.714.153zm-.047-2.358c-.19 0-.344.06-.46.18a.655.655 0 00-.175.476v.037h1.237v-.048c0-.197-.054-.354-.163-.47a.561.561 0 00-.44-.175zm1.965 1.761h.676v-1.66h-.676v-.534h1.353v.745h.043c.024-.095.058-.187.1-.275a.803.803 0 01.777-.47h.296v.634h-.56c-.205 0-.365.06-.481.18a.633.633 0 00-.175.46v.92h.947v.534h-2.3v-.534z"
      ></path>
      <rect
        width="50.606"
        height="5.327"
        x="82.567"
        y="121.188"
        fill="#D7E0EA"
        rx="2.663"
      ></rect>
      <rect
        width="50.606"
        height="5.327"
        x="82.567"
        y="131.841"
        fill="#D7E0EA"
        rx="2.663"
      ></rect>
      <path
        stroke="#C7C7C7"
        strokeDasharray="0.66 3.97"
        strokeLinecap="round"
        strokeWidth="1.322"
        d="M108.536 20.975h40.334a6.61 6.61 0 016.61 6.61v40.05a6.61 6.61 0 006.609 6.61h9.039"
      ></path>
      <g filter="url(#a)">
        <rect
          width="21.308"
          height="21.308"
          x="91.889"
          y="24.637"
          fill="#1ABA5A"
          rx="10.654"
        ></rect>
      </g>
      <g clipPath="url(#b)">
        <path
          fill="#fff"
          d="M100.546 38.087l-2.797-2.796-.932.932 3.729 3.729 7.99-7.99-.932-.933-7.058 7.058z"
        ></path>
      </g>
      <defs>
        <clipPath id="b">
          <path
            fill="#fff"
            d="M0 0h15.981v15.981H0z"
            transform="translate(94.553 27.3)"
          ></path>
        </clipPath>
        <filter
          id="a"
          width="64.929"
          height="64.929"
          x="70.079"
          y="14.062"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="0.713"></feOffset>
          <feGaussianBlur stdDeviation="2.361"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.0196078 0 0 0 0 0.0941176 0 0 0 0 0.25098 0 0 0 0.0377807 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_11_3513"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2.512"></feOffset>
          <feGaussianBlur stdDeviation="4.445"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.0196078 0 0 0 0 0.0941176 0 0 0 0 0.25098 0 0 0 0.0522616 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_11_3513"
            result="effect2_dropShadow_11_3513"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="11.236"></feOffset>
          <feGaussianBlur stdDeviation="10.905"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.0196078 0 0 0 0 0.0941176 0 0 0 0 0.25098 0 0 0 0.07 0"></feColorMatrix>
          <feBlend
            in2="effect2_dropShadow_11_3513"
            result="effect3_dropShadow_11_3513"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect3_dropShadow_11_3513"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default SourcesSVG;
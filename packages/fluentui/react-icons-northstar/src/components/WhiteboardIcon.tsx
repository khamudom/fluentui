// This is Fluent-style icon
import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const WhiteboardIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M12.8909,4 L11.8947,5 L5,5 C3.94563773,5 3.08183483,5.81587733 3.00548573,6.85073759 L3,7 L3,7.93304 C3.47803,7.55093 4.02816,7.14442 4.57397,6.82886 C5.02331,6.56908 5.5064,6.34883 5.96843,6.27026 C6.43964,6.19013 6.95714,6.25003 7.35356,6.64645 C7.5652,6.85809 7.69589,7.1065 7.73962,7.3821 C7.78203,7.64932 7.73713,7.90637 7.65956,8.13543 C7.53525167,8.502505 7.29857528,8.87317028 7.06342551,9.20988532 L6.82956,9.53849 C6.57002,9.9001 6.33421,10.2286 6.17356,10.5491 C5.99399,10.9073 5.9618,11.1542 6.02435,11.3419 C6.1049,11.5835 6.2283,11.6844 6.36375,11.737 C6.52509,11.7997 6.75863,11.8123 7.0616,11.7579 C7.66848,11.6489 8.34429,11.3104 8.74276,11.0713 C8.97955,10.9292 9.28668,11.006 9.42875,11.2428 C9.57083,11.4796 9.49405,11.7867 9.25726,11.9288 C8.8224,12.1897 8.0232,12.6012 7.23841,12.7421 C6.84556,12.8127 6.4041,12.8254 6.00189,12.6693 C5.5738,12.5031 5.24512,12.1665 5.07567,11.6581 C4.88822,11.0958 5.05535,10.5483 5.27961,10.101 C5.43869,9.783632 5.6534244,9.4658096 5.8619636,9.17198592 L6.10999,8.82589 C6.40207,8.41742 6.61887,8.09086 6.7124,7.81467 C6.75618,7.68539 6.76137,7.59799 6.75198,7.53881 C6.74392,7.488 6.72095,7.42805 6.64645,7.35356 C6.5585,7.2656 6.41716,7.20831 6.13608,7.25611 C5.84583,7.30547 5.48323,7.45827 5.07449,7.69458 C4.44434429,8.05890857 3.79155531,8.56933102 3.25685682,9.01445073 L3,9.23059 L3,13 C3,14.0543909 3.81587733,14.9181678 4.85073759,14.9945144 L5,15 L15,15 C16.0543909,15 16.9181678,14.18415 16.9945144,13.1492661 L17,13 L17,8.1379 L18,7.13407 L18,13 C18,14.597725 16.7511226,15.903664 15.1762773,15.9949075 L15,16 L5,16 C3.40232321,16 2.09633941,14.7511226 2.00509271,13.1762773 L2,13 L2,7 C2,5.40232321 3.24892392,4.09633941 4.82372764,4.00509271 L5,4 L12.8909,4 Z M17.3314,3.46118 L17.4411,3.56329 L17.5425,3.67353 C18.1849,4.42823 18.1507,5.5651 17.4402,6.27912 L13.8367,9.89642 C13.6153,10.1186 13.3427,10.2823 13.0431,10.3727 L11.0838,10.964 C10.6385,11.0984 10.1692,10.8444 10.0355,10.3967 C9.98651,10.2325 9.98825,10.0571 10.0405,9.89393 L10.6625,7.95152 C10.7548,7.66332 10.9141,7.4014 11.1272,7.18748 L14.739,3.56174 C15.4501,2.84784 16.5811,2.81448 17.3314,3.46118 Z M16.6666,4.20847 C16.3428727,3.93915182 15.8767488,3.9306105 15.5432093,4.18370253 L15.4474,4.26748 L11.8357,7.89321 C11.760025,7.969185 11.6984125,8.05819313 11.6537734,8.15596078 L11.6149,8.25649 L11.0822,9.91996 L12.7541,9.41534 C12.859625,9.3834875 12.9583437,9.33220625 13.0453203,9.26417938 L13.1282,9.19067 L16.7314,5.57374 C17.03995,5.26361333 17.0829722,4.78427993 16.8589262,4.42780494 L16.7912,4.33385 L16.7313,4.26874 L16.6666,4.20847 Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M12.8912281,3.99999924 L10.4187326,6.48173646 C10.0936511,6.80806881 9.85079103,7.20737132 9.71014878,7.64651647 L9.0881369,9.58896357 C8.97444508,9.94400844 8.97065504,10.3253569 9.07724113,10.682602 C9.36908531,11.6598544 10.3966432,12.2159518 11.3727451,11.9213457 L13.3320209,11.330053 C13.7901004,11.191834 14.2068257,10.9416973 14.5450491,10.6022823 L17.9992281,7.13399924 L18,12.9999992 C18,14.6568535 16.6568542,15.9999992 15,15.9999992 L5,15.9999992 C3.34314575,15.9999992 2,14.6568535 2,12.9999992 L1.99922809,10.0209992 L2.05850952,9.97771873 L2.53568554,9.56271467 C4.78308928,7.64269649 6.17265242,6.96185896 6.56911941,7.28427143 L6.60658514,7.32119355 C6.90532224,7.67780214 6.82124514,7.96405096 6.19114166,8.75196781 L5.87318646,9.14395603 C5.52212386,9.58392329 5.3470344,9.85761334 5.22959289,10.1960821 C4.78536386,11.476359 5.18891277,12.4646829 6.20508057,12.7345871 C6.74864047,12.878962 7.40634293,12.7797707 8.18763495,12.4634578 C8.44359562,12.3598299 8.56708571,12.0683257 8.46345779,11.812365 C8.35982987,11.5564044 8.06832572,11.4329143 7.81236505,11.5365422 C7.21353012,11.7789858 6.76018929,11.8473563 6.46178955,11.7680984 C6.05708729,11.6606055 5.90724982,11.2936414 6.17433777,10.5238886 C6.23650056,10.3447342 6.34848783,10.1618899 6.56963108,9.87624938 L6.78729833,9.60392849 L6.97052714,9.37816636 C7.89545442,8.21724451 8.1041757,7.55166698 7.37315119,6.67902808 C6.48219543,5.61547598 4.74039919,6.37651116 2.00009037,8.70454435 L2,6.99999924 C2,5.34314499 3.34314575,3.99999924 5,3.99999924 L12.8912281,3.99999924 Z M17.3314,3.46118 L17.4411,3.56329 L17.5425,3.67353 C18.1849,4.42823 18.1507,5.5651 17.4402,6.27912 L13.8367,9.89642 C13.6153,10.1186 13.3427,10.2823 13.0431,10.3727 L11.0838,10.964 C10.6385,11.0984 10.1692,10.8444 10.0355,10.3967 C9.98651,10.2325 9.98825,10.0571 10.0405,9.89393 L10.6625,7.95152 C10.7548,7.66332 10.9141,7.4014 11.1272,7.18748 L14.739,3.56174 C15.4501,2.84784 16.5811,2.81448 17.3314,3.46118 Z"
      />
    </svg>
  ),
  displayName: 'WhiteboardIcon',
});

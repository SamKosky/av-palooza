/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default function IconLogo({
  backgroundColor = 'transparent',
  foregroundColor = 'var(--accents-1)',
  ...props
}) {
  return (
    <svg 
      width="100%" height="100%" viewBox="0 0 70 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}
    >
    <g clipPath="url(#clip0_27_798)">
    <path d="M43.4861 0.800293H37.0787L45.2481 18.5406L53.4174 35.0001L69.676 0.800293H63.2687L53.4174 23.1458L43.4861 0.800293Z" fillRule="evenodd" fill={foregroundColor}/>
    <path d="M27.4714 0.800915V5.52632C24.1876 1.68192 20.6636 0 15.8581 0C6.72769 0 0 7.28833 0 17.2998C0 27.5515 6.72769 35 16.0183 35C20.7437 35 24.2677 33.238 27.4714 29.3936V34.0389H33.1579V0.800915H27.4714ZM16.8192 5.20595C23.3066 5.20595 27.8719 10.1716 27.8719 17.3799C27.8719 24.6682 23.3066 29.7941 16.7391 29.7941C10.4119 29.7941 5.84668 24.508 5.84668 17.2197C5.84668 10.4119 10.5721 5.20595 16.8192 5.20595Z" fillRule="evenodd" fill={foregroundColor}/>
    </g>
    <defs>
    <clipPath id="clip0_27_798">
    <rect width="100%" height="100%" fill={backgroundColor}/>
    </clipPath>
    </defs>
    </svg>
  );
}

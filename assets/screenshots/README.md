# App Store Screenshot Specs (iPhone and iPad)

Last verified: 2026-05-28  
Source: https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/

## Global rules

- Upload 1 to 10 screenshots per device family.
- Allowed formats: .jpeg, .jpg, .png.
- Use one of the accepted pixel sizes below (portrait or landscape).

## iPhone

### Required coverage

- If the app runs on iPhone, provide screenshots for 6.9-inch display.
- If 6.9-inch screenshots are not provided, 6.5-inch screenshots are required.

### Accepted iPhone sizes

| Display class | Accepted portrait sizes | Accepted landscape sizes | Requirement and notes |
| --- | --- | --- | --- |
| 6.9-inch | 1260x2736, 1290x2796, 1320x2868 | 2736x1260, 2796x1290, 2868x1320 | Primary modern iPhone set. |
| 6.5-inch | 1284x2778, 1242x2688 | 2778x1284, 2688x1242 | Required when 6.9-inch set is missing. |
| 6.3-inch | 1179x2556, 1206x2622 | 2556x1179, 2622x1206 | If missing, scaled 6.5-inch screenshots are used. |
| 6.1-inch | 1170x2532, 1125x2436, 1080x2340 | 2532x1170, 2436x1125, 2340x1080 | If missing, scaled 6.5-inch screenshots are used. |
| 5.5-inch | 1242x2208 | 2208x1242 | Legacy accepted size. |
| 4.7-inch | 750x1334 | 1334x750 | Legacy accepted size. |

## iPad

### Required coverage

- If the app runs on iPad, provide screenshots for 13-inch display.

### Accepted iPad sizes

| Display class | Accepted portrait sizes | Accepted landscape sizes | Requirement and notes |
| --- | --- | --- | --- |
| 13-inch | 2064x2752, 2048x2732 | 2752x2064, 2732x2048 | Required if app runs on iPad. |
| 12.9-inch | 2048x2732 | 2732x2048 | If missing, scaled 13-inch screenshots are used. |
| 11-inch | 1488x2266, 1668x2420, 1668x2388, 1640x2360 | 2266x1488, 2420x1668, 2388x1668, 2360x1640 | If missing, scaled 13-inch screenshots are used. |
| 10.5-inch | 1668x2224 | 2224x1668 | If missing, scaled 12.9-inch screenshots are used. |
| 9.7-inch | 1536x2008, 1536x2048, 768x1004, 768x1024 | 2048x1496, 2048x1536, 1024x748, 1024x768 | If missing, scaled 10.5-inch screenshots are used. |

## Current repo folders

- 1320x2868/: iPhone 6.9-inch portrait asset set.
- 1206x2622/: iPhone 6.3-inch portrait asset set.

## Recommended working convention

- Keep raw simulator exports at the root of this folder while selecting final shots.
- Copy final App Store shots into size folders named exactly WIDTHxHEIGHT.
- Use a stable ordering for files (example: 01-Welcome, 02-Gameplay, 03-Mode-Select).
- For each release, verify accepted sizes against the Apple reference page above before submission.

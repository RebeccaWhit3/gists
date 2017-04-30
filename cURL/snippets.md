# Curl Snippets

## Capture CURL output to file

# For individual requests

```bat
-o "file_#1.txt"
```

### For multiple requests

#### If the URL contains a dynamic page number

**Options:**

```
// page # for initial page
    counter=100
// total number of pages
    counter<=30000
// number of items returned 
    counter+=100
// url string (static)
    http://example.com/locations/city?limit=100&offset=$counter
```

**Code:**

```bat
for (( counter=100; counter<=30000; counter+=100 )); do
    curl -vs "http://example.com/locations/city?limit=100&offset=$counter"
done >cities.json
```

## Parallel capture a numeric range of URLs

**Compressed:**

```bat
parallel -k curl -vs "http://example.com/locations/city?limit=100\&offset={}" ::: $(seq 100 100 30000) > cities.json
```

**Exanded:**

```bat
parallel
  -k
  curl
    -vs
    "http://example.com/locations/city?limit=100\&offset={}"
    :::
    $(seq 100 100 30000)
    >
    cities.json
```

## Topic suggestions from Github

- Where `{QUERY}` is the search term.
- Might require data to access (e.g. cookies, recent website access etc)
- Polling rates used in testing:
    + 350ms
    + 500ms

**Compressed:**

```bat
curl "https://github.com/RebeccaWhit3/gists/topic_autocomplete?q={QUERY}" -H "Pragma: no-cache" -H "Accept-Encoding: gzip, deflate, br" -H "Accept-Language: ko,en;q=0.8" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.0 Safari/537.36" -H "Accept: */*" -H "Referer: https://github.com/RebeccaWhit3/gists" -H "x-requested-with: XMLHttpRequest" -H "Cookie: _octo=GH1.1.30196043.1491866777; logged_in=yes; dotcom_user=RebeccaWhit3; _gat=1; _ga=GA1.2.1595057441.1491866777; tz=America^%^2FToronto; _gh_sess=eyJzZXNzaW9uX2lkIjoiMWQ1YTliNjQxYzI3YTFkNmQwZmFlZTdkYzdiN2E4ODEiLCJjb250ZXh0IjoiLyIsInNweV9yZXBvIjoiUmViZWNjYVdoaXQzL2dpc3RzIiwic3B5X3JlcG9fYXQiOjE0OTIxODIxMjcsImxhc3Rfd3JpdGUiOjE0OTIxODIyODk1MjJ9--e8b2d84786cfd49867b38cda2970b1b9e340935b; user_session=rdnsgTMHQoRNeT_Z1IRrCWMSB05kGcUy3c0Y5lvIy7E0RnMm; __Host-user_session_same_site=rdnsgTMHQoRNeT_Z1IRrCWMSB05kGcUy3c0Y5lvIy7E0RnMm" -H "Connection: keep-alive" -H "Cache-Control: no-cache" --compressed
```

**Expanded:**

```bat
curl
  "https://github.com/RebeccaWhit3/gists/topic_autocomplete?q={QUERY}"
    -H "Pragma: no-cache"
    -H "Accept-Encoding: gzip, deflate, br"
    -H "Accept-Language: ko,en;q=0.8"
    -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.0 Safari/537.36"
    -H "Accept: */*"
    -H "Referer: https://github.com/RebeccaWhit3/gists"
    -H "x-requested-with: XMLHttpRequest"
    -H "Cookie: _octo=GH1.1.30196043.1491866777; logged_in=yes; dotcom_user=RebeccaWhit3; _gat=1; _ga=GA1.2.1595057441.1491866777; tz=America^%^2FToronto; _gh_sess=eyJzZXNzaW9uX2lkIjoiMWQ1YTliNjQxYzI3YTFkNmQwZmFlZTdkYzdiN2E4ODEiLCJjb250ZXh0IjoiLyIsInNweV9yZXBvIjoiUmViZWNjYVdoaXQzL2dpc3RzIiwic3B5X3JlcG9fYXQiOjE0OTIxODIxMjcsImxhc3Rfd3JpdGUiOjE0OTIxODIyODk1MjJ9--e8b2d84786cfd49867b38cda2970b1b9e340935b; user_session=rdnsgTMHQoRNeT_Z1IRrCWMSB05kGcUy3c0Y5lvIy7E0RnMm; __Host-user_session_same_site=rdnsgTMHQoRNeT_Z1IRrCWMSB05kGcUy3c0Y5lvIy7E0RnMm" -H "Connection: keep-alive" -H "Cache-Control: no-cache"
    --compressed
```

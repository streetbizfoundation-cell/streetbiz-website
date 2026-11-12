export interface NewsletterArticle {
  title: string
  subtitle: string
  author?: string
  section: 'Events' | 'Gallery'
  sectionHref: string
  blocks: Array<
    | { type: 'paragraph' | 'heading'; text: string }
    | { type: 'photos'; caption: string; images: { src: string; alt: string }[] }
    | { type: 'link'; text: string; href: string }
  >
}

// Direct-link newsletter articles only; do not import into public listings.

export const learningTogether: NewsletterArticle = {
  "title": "Learning together",
  "subtitle": "A gathering that reminded us we are not alone",
  "author": "Angel Nemakonde",
  "section": "Events",
  "sectionHref": "/events",
  "blocks": [
    {
      "type": "photos",
      "caption": "The July 2026 Be a Nelson conference in Gauteng",
      "images": [
        {
          "src": "/images/newsletter 3 images/Picture 7.jpg",
          "alt": "Participants at the July 2026 Be a Nelson conference in Gauteng"
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Before the first session began, there was the quiet uncertainty that comes when strangers gather. Some found familiar faces; others looked around before choosing a seat. Every movement begins with moments like these: people deciding to enter a room together."
    },
    {
      "type": "paragraph",
      "text": "In July 2026, Be a Nelson held two separate conferences, first in the Western Cape and then in Gauteng. Together, they welcomed 56 participants, with 14 new Nelsons joining the movement across the two events. Some participants were already leading projects; others were still wondering whether they had earned the right to call themselves leaders."
    },
    {
      "type": "photos",
      "caption": "Professor Jeffrey McClellan facilitating leadership learning, and Kiara van Neel presenting on community challenges",
      "images": [
        {
          "src": "/images/newsletter 3 images/Picture 8 LEFT.jpg",
          "alt": "Professor Jeffrey McClellan facilitating leadership learning"
        },
        {
          "src": "/images/newsletter 3 images/Picture 8.1 RIGH.jpg",
          "alt": "Kiara van Neel presenting on community challenges"
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Professor Jeffrey McClellan reminded us that leadership is something we practise. It lives in how we respond, serve others and keep showing up. Workshops and honest conversations gave participants room to question, listen and learn."
    },
    {
      "type": "paragraph",
      "text": "One participant reflected that “leadership can happen in everyday life.” Another wrote, “You are phenomenal. I’m a proud Nelson now.” These words show the encouragement people found in one another."
    },
    {
      "type": "paragraph",
      "text": "The next step is helping Nelsons carry that confidence into action at home. Practical workshops, coaching and support for their ideas can help them prepare for opportunities such as the 2027 Youth Day Pitch."
    },
    {
      "type": "heading",
      "text": "Your support made these gatherings possible"
    },
    {
      "type": "paragraph",
      "text": "Our July 2026 Be a Nelson conferences were made possible with the help of donations received through our GoFundMe campaign. To everyone who contributed: thank you for helping bring the Nelsons together."
    },
    {
      "type": "paragraph",
      "text": "Across the Western Cape and Gauteng gatherings, 56 participants came together to learn, share experiences and explore leadership in their communities. Across the two events, 14 new Nelsons joined the movement."
    },
    {
      "type": "paragraph",
      "text": "Your donations helped create space for workshops, honest conversations and connections. Participants found encouragement in one another and opportunities to think about their next steps as community leaders."
    },
    {
      "type": "paragraph",
      "text": "As one participant reflected, “leadership can happen in everyday life.” Thank you for helping make this shared learning possible."
    },
    {
      "type": "heading",
      "text": "Learning continues between gatherings"
    },
    {
      "type": "paragraph",
      "text": "Nelsons also explored financial thinking with Vishal in August and fundraising with Nancy Schongalla in April. These conversations show how sharing your experience can become a learning opportunity for someone else."
    }
  ]
}

export const justMakeItWork: NewsletterArticle = {
  "title": "Watch Just Make It Work",
  "subtitle": "Meet the Nelsons through film",
  "section": "Gallery",
  "sectionHref": "/gallery",
  "blocks": [
    {
      "type": "photos",
      "caption": "Just Make It Work – The StreetBiz Story, directed by Stefan Kuttler",
      "images": [
        {
          "src": "/images/newsletter 3 images/Picture 9.jpg",
          "alt": "Just Make It Work – The StreetBiz Story, directed by Stefan Kuttler"
        }
      ]
    },
    {
      "type": "link",
      "text": "Watch Just Make It Work on YouTube",
      "href": "https://www.youtube.com/watch?v=EaS3IOjNCfg"
    },
    {
      "type": "paragraph",
      "text": "At 20, Stefan Kuttler travelled from Switzerland to South Africa and used his filmmaking skills to tell the Nelsons’ stories. “Just Make It Work – The StreetBiz Story” was first screened at Film Sprösslinge at neues kino Basel in Switzerland on 19 April 2026."
    },
    {
      "type": "photos",
      "caption": "Behind the scenes and Nelsons who participated in the film",
      "images": [
        {
          "src": "/images/newsletter 3 images/Picture 10 LEFT.jpg",
          "alt": "Behind the scenes of Just Make It Work"
        },
        {
          "src": "/images/newsletter 3 images/Picture 10.1.jpg",
          "alt": "Nelsons who participated in the film"
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Stefan described hearing the Nelsons’ struggles, motivations and hopes as “deeply inspiring to witness.” The film offers another way to meet the people behind the movement and hear what they want to build in their communities."
    },
    {
      "type": "paragraph",
      "text": "His contribution also shows how a skill can become a practical offer of support. You might help a Nelson tell a story, prepare a pitch, understand finances or develop a project. Email Bafana at hello@streetbiz.co.za to explore what you could offer."
    },
    {
      "type": "heading",
      "text": "Thank you for helping the stories travel"
    },
    {
      "type": "paragraph",
      "text": "StreetBiz also presented at ChangeNOW in Paris, reaching the final 40 entries in the global vote and placing eighth. Thank you to everyone who voted, shared the story or introduced someone to the movement. As we look ahead, we hope these connections will help open further opportunities for the Nelsons."
    }
  ]
}

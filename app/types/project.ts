export type Project = {
  slug: string;
  name: string;
  home: string;
  home_mobile?: string;
  bath?: string;
  bath_mobile?: string;
  bed?: string;
  bed_mobile?: string;
  corridor?: string;
  corridor_mobile?: string;
  kitchen?: string;
  kitchen_mobile?: string;
  lounge?: string;
  lounge_mobile?: string;
  info: {
    location: string;
    date: string;
    projectType: string;
    photography: string;
    collaborators: string;
    testimonials: {
      name: string;
      opinion: string;
    };
  };
};

export type MemberType = {
  role: string;
  name: string;
  skill: string;
  define: string;
  image: string;
};

export interface IAnswerOwner {
  reputation: number;
  user_id: number;
  user_type: string;
  accept_rate: number;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface IParsedSearchData {
  tags: string[];
  question: IQuestion;
  owner: IAnswerOwner;
  count: IAnswer;
}

export interface ISearchResult {
  items: ISearchResultItem[]
  has_more: boolean
  quota_max: number
  quota_remaining: number
}

export interface IQuestion {
  title: string;
  question_id: number;
}

export interface IAnswer {
  answer_count: number;
  question_id: number;
}

export interface ISearchResultItem {
  accepted_answer_id: number;
  answer_count: number;
  closed_date: number;
  creation_date: number;
  last_activity_date: number;
  last_edit_date: number;
  last_editor_display_name: string;
  last_editor_user_id: number;
  link: string;
  owner: IAnswerOwner;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
  body: string;
  is_accepted: boolean;
  is_answered: boolean;
}

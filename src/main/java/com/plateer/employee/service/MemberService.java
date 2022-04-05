package com.plateer.employee.service;

import com.plateer.employee.vo.Member;

import java.util.List;

public interface MemberService {

    public List<Member> getMemberList(String startNumber, String CountNumber);

    public Integer countMember();

    public Member viewMember(String memberId);

    public Integer insertMember(Member member);

    public Integer updateMember(Member member);

    public Integer deleteMember(String memberId);
}
